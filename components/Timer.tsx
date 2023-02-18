import React, { useState, useEffect, useRef } from "react"
import useSound from "use-sound"
import { ICountdownTimerParams } from 'use-countdown-timer'
import { useCountdownTimer } from "use-countdown-timer"
import WorkoutOption from "./WorkoutOption"
import IntervalsTable from "./IntervalsTable"
import defaultWorkout from "../lib/defaultWorkout"
import quickWorkouts from "../lib/quickWorkouts"
import { fingerPositions } from "../lib/fingerpositions"
import { grindstone, simpleboard, hangboards } from "../lib/hangboards"
import GrindStoneSelector from "./GrindstoneSelector"
import SimpleboardSelector from "./SimpleboardSelector"
import FingerPositionSelector from "./FingerPositionSelector"
import produce from "immer"

const equal = require('deep-equal');

export interface IHangboard {
    name: string;
    title: string;
    holds: Array<IHold>;
}

export interface IFingerPosition {
    name: string;
    title: string;
}

export interface IHold {
    name: string;
    title: string;
}

export interface IHand {
    hangboard: IHangboard;
    fingerPosition: IFingerPosition;
    hold: IHold;
}

interface IWorkoutConfig {
    name?: string;
    prepInterval: number;
    workInterval: number;
    restInterval: number;
    numIntervals: number;
}

export interface IWorkout {
    id: number,
    name?: string;
    date?: Date;
    intervals: Array<IInterval>;
}

export interface IHang {
    kind: 'hang';
    title: 'Hang';
}

export interface IPullup {
    kind: 'pullup';
    reps: number;
    title: 'Pullup'
}

export interface ILegLift {
    kind: 'leglift';
    reps: number;
    title: 'Leg lift';
}

export type Action = IHang | IPullup | ILegLift

export interface IInterval {
    workInterval: number;
    restInterval: number;
    leftHand: IHand;
    rightHand: IHand;
    action: Action;
}


export default function Timer() {

    const workoutStatusOptions = { unconfigured: 'Please select an edge', ready: 'Ready', rest: 'REST', work: 'WORK', prep: 'PREP', pause: 'PAUSED', completed: 'DONE!' }

    const [playPopFx] = useSound('/sounds/pop.mp3')
    const [playIntroFx] = useSound('/sounds/intro.wav')
    const [playSwitchFx] = useSound('/sounds/switch.wav')
    const [playEndFx] = useSound('/sounds/end.wav')

    let [prepTime, setPrepTime] = useState<number>(2);
    const [workout, setWorkout] = useState<IWorkout>(defaultWorkout);
    const [workoutStatus, setWorkoutStatus] = useState<string>(workoutStatusOptions.unconfigured);
    const [currentIntervalIndex, setCurrentIntervalIndex] = useState<number>(0);

    let [reps, setReps] = useState<number>(1)

    const prevWorkoutRef = useRef(workout);
    const prevWorkoutStatusRef = useRef(workoutStatus);

    useEffect(() => {
        handleResetTimer();
    }, []);

    useEffect(() => {
        if (prevWorkoutRef.current.id !== workout.id) {
            handleResetTimer();
            prevWorkoutRef.current = workout;
        }
    }, [workout]);

    function completeInterval() {
        if (workoutStatus == workoutStatusOptions.prep) {
            handleWorkoutStatus(workoutStatusOptions.work)
            workTimer.start()
            playSwitchFx()
        }

        if (workoutStatus == workoutStatusOptions.work) {
            handleWorkoutStatus(workoutStatusOptions.rest)
            restTimer.start()
            playSwitchFx()
        }
        else if (workoutStatus === workoutStatusOptions.rest) {
            if (currentIntervalIndex < workout.intervals.length - 1) {
                handleWorkoutStatus(workoutStatusOptions.work)
                setCurrentIntervalIndex(currentIntervalIndex + 1)
                workTimer.start()
                playSwitchFx()
            }
            else {
                handleWorkoutStatus(workoutStatusOptions.completed)
                playEndFx()
            }
        }
    }

    const prepTimer = useCountdownTimer({
        timer: prepTime * 1000,
        expireImmediate: true,
        onExpire: completeInterval
    })


    const workTimer = useCountdownTimer({
        timer: workout.intervals[currentIntervalIndex].workInterval * 1000,
        expireImmediate: true,
        onExpire: completeInterval
    })

    const restTimer = useCountdownTimer({
        timer: workout.intervals[currentIntervalIndex].restInterval * 1000,
        expireImmediate: true,
        onExpire: completeInterval
    })



    const handleStartTimer = () => {
        handleWorkoutStatus(workoutStatusOptions.prep)
        prepTimer.start()
        playIntroFx()
    }

    const handlePauseTimer = () => {
        switch (workoutStatus) {
            case workoutStatusOptions.prep: prepTimer.pause()
            case workoutStatusOptions.work: workTimer.pause()
            case workoutStatusOptions.rest: restTimer.pause()
        }
        handleWorkoutStatus(workoutStatusOptions.pause);
    }

    const handleResetTimer = () => {
        handleWorkoutStatus(workoutStatusOptions.ready)
        setCurrentIntervalIndex(0);
        prepTimer.reset()
        workTimer.reset()
        restTimer.reset()
        playPopFx()
    };

    function handleResumeTimer() {
        switch (prevWorkoutStatusRef.current) {
            case workoutStatusOptions.prep: 
                prepTimer.start();
                break;
            case workoutStatusOptions.rest: 
                restTimer.start();
                break;
            case workoutStatusOptions.work: 
                workTimer.start();
                break;
        }
        handleWorkoutStatus(prevWorkoutStatusRef.current);
    }

    function handleWorkoutStatus(newWorkoutStatus: string) {
        prevWorkoutStatusRef.current = workoutStatus;
        setWorkoutStatus(newWorkoutStatus);
    }

    function handleEditInterval(interval: IInterval, index: number) {
        const newWorkout = produce(
            workout,
            draftWorkout => {
                draftWorkout.intervals[index] = interval;
            }
        )
        setWorkout(newWorkout);
    }

    function handleAddInterval(interval: IInterval, index: number) {
        const newWorkout = setWorkout(
            produce((draft) => {
                draft.intervals.splice(index, 0, { ...interval });
            })
        )
    }

    function handleDeleteInterval(interval: IInterval, index: number) {
        const newWorkot = setWorkout(
            produce((draft) => {
                draft.intervals.splice(index, 1);
            })
        )
    }

    function handleRightHand(newHand: IHand, index: number) {
        if (equal(workout.intervals[index].rightHand, newHand, { strict: true })) {
            setWorkout(
                produce((draft) => {
                    draft.intervals[index].rightHand = { fingerPosition: null, hangboard: null, hold: null }
                }));
        }
        else if (workout.intervals[index].rightHand.fingerPosition === null) {
            setWorkout(
                produce((draft) => {
                    draft.intervals[index].rightHand = { ...newHand, fingerPosition: fingerPositions[0] };
                })
            )
        }
        else {
            setWorkout(
                produce((draft) => {
                    draft.intervals[index].rightHand = newHand;
                })
            );
        }
    }

    function handleLeftHand(newHand: IHand, index: number) {
        if (equal(workout.intervals[index].leftHand, newHand, { strict: true })) {
            setWorkout(
                produce((draft) => {
                    draft.intervals[index].leftHand = { fingerPosition: undefined, hangboard: undefined, hold: undefined }
                }));
        }
        else if (workout.intervals[index].leftHand.fingerPosition === undefined) {
            setWorkout(
                produce((draft) => {
                    draft.intervals[index].leftHand = { ...newHand, fingerPosition: fingerPositions[0] };
                })
            )
        }
        else {
            setWorkout(
                produce((draft) => {
                    draft.intervals[index].leftHand = newHand;
                })
            );
        }
    };

    function handleAction(action: Action, index) {
        let newWorkout = produce(
            workout,
            draftWorkout => {
                draftWorkout.intervals[index].action = action;
            }
        );
        setWorkout(newWorkout);
    }



    function handleLeftFingerPosition(fingerPosition: IFingerPosition, index: number) {
        handleFingerPosition('leftHand', fingerPosition, index);
    }

    function handleRightFingerPosition(fingerPosition: IFingerPosition, index: number) {
        handleFingerPosition('rightHand', fingerPosition, index);
    }

    function handleFingerPosition(whichHand: string, fingerPosition: IFingerPosition, index: number) {
        let newWorkout = produce(
            workout,
            draftWorkout => {
                draftWorkout.intervals[index][whichHand].fingerPosition = fingerPosition;
            }
        )
        setWorkout(newWorkout);
    }

    function handleQuickWorkout(newWorkout: IWorkout) {
        setWorkout(newWorkout);
        // handleResetTimer(); 
    }



    const getTimerTheme = () => {
        if (workoutStatus === workoutStatusOptions.completed) {
            return 'bg-yellow-400 text-slate-600'
        }

        else if (workoutStatus === workoutStatusOptions.work) {
            return 'bg-green-700 text-slate-200'
        }
        else {
            return ''
        }
    }


    return (
        <div className="flex flex-col justify-center items-center w-full py-8">
            <section
                id="timerdisplay"
                className={`flex flex-col border border-slate-700 shadow shadow-slate-500 ${getTimerTheme()} justify-between rounded-sm max-w-3xl p-8 h-96 md:w-5/6`}>
                <div className="flex justify-center text-center space-x-4">
                    <div>INTERVAL</div>
                    <div>{currentIntervalIndex + 1} / {workout.intervals.length}</div>
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-4 text-6xl h-24">
                    <div>{workoutStatus}</div>
                    {workoutStatus === workoutStatusOptions.prep && <div>{prepTimer.countdown / 1000}</div>}
                    {workoutStatus === workoutStatusOptions.work && <div>{workTimer.countdown / 1000}</div>}
                    {workoutStatus === workoutStatusOptions.rest && <div>{restTimer.countdown / 1000}</div>}
                </div>
                <div className="flex items-center justify-center space-x-4 text-slate-800">
                    {workoutStatus === workoutStatusOptions.ready ?
                        <button 
                        onClick={() => handleStartTimer()} 
                        id="startTimer" 
                        className="bg-green-500 rounded text-2xl py-1 px-1 w-24 md:w-36">START</button> :
                        <></>
                    }
                    {workoutStatus === workoutStatusOptions.rest || workoutStatus === workoutStatusOptions.work || workoutStatus === workoutStatusOptions.prep?
                        <button
                            onClick={() => handlePauseTimer()}
                            id="pauseTimer"
                            className="bg-sky-500 rounded text-2xl py-1 w-24 md:w-36 disabled:hidden"
                            disabled={workoutStatus === workoutStatusOptions.completed}
                        >PAUSE</button> :
                        <></>
                    }
                    {workoutStatus === workoutStatusOptions.pause ?
                        <button
                            onClick={() => handleResumeTimer()}
                            id="pauseTimer"
                            className="bg-sky-500 rounded text-2xl py-1 w-24 md:w-36 disabled:hidden"
                            disabled={workoutStatus === workoutStatusOptions.completed}
                        >RESUME</button> :
                        <></>
                    }
                    <button onClick={() => handleResetTimer()} id="resetTimer" className="bg-yellow-500 rounded text-2xl py-1 w-24 md:w-36">RESET</button>
                </div>
            </section>
            <section id="hold-selection" className="max-w-3xl flex flex-col items-center w-5/6">
                <div className="flex w-full rounded justify-center mt-12 border border-slate-700 shadow p-2 shadow-slate-700">
                    <SimpleboardSelector
                        setHand={handleLeftHand}
                        currentHand={workout.intervals[currentIntervalIndex].leftHand}
                        index={currentIntervalIndex} />
                    <GrindStoneSelector
                        currentLeftHand={workout.intervals[currentIntervalIndex].leftHand}
                        handleLeftHand={handleLeftHand}
                        currentRightHand={workout.intervals[currentIntervalIndex].rightHand}
                        handleRightHand={handleRightHand}
                        index={currentIntervalIndex} />
                    <SimpleboardSelector
                        currentHand={workout.intervals[currentIntervalIndex].rightHand}
                        setHand={handleRightHand}
                        index={currentIntervalIndex}
                    />
                </div>
            </section>
            <section id="current-detail" className="flex flex-col max-w-3xl w-5/6 shadow shadow-slate-800 p-2 items-center">
                <section id="action-detail" className="flex max-w-3xl mt-6 items-center">
                    <div className="flex space-x-6 justify-center w-full">
                        <button
                            className={`w-24 h-8 text-sm text-center ${workout.intervals[currentIntervalIndex].action.kind === "hang" ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : 'border-border-slate-700'} text-slate-100 rounded-md`} onClick={() => handleAction({ kind: "hang", title: 'Hang' }, currentIntervalIndex)}>Hang</button>
                        <button className={`w-24 h-8 text-sm text-center ${workout.intervals[currentIntervalIndex].action.kind === "pullup" ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : 'border border-slate-700'} text-slate-100 rounded-md`} onClick={() => handleAction({ kind: "pullup", reps: reps, title: 'Pullup' }, currentIntervalIndex)}>Pullup</button>
                    </div>
                </section>
                <section id="hand-position-detail" className="max-w-3xl mt-6 flex items-center w-5/6">
                    <div className="w-1/2 flex flex-col items-center space-y-2">
                        <h3 className="font-md text-sm text-slate-200">Left Hand</h3>
                        {workout.intervals[currentIntervalIndex].leftHand.hold ? <div>
                            <p className="mt-1 text-center text-sm text-slate-300">{workout.intervals[currentIntervalIndex].leftHand.hold.title}</p>
                            <p className="mt-1 mb-2 text-center text-sm text-slate-300">{workout.intervals[currentIntervalIndex].leftHand.hangboard.title}</p>
                            <FingerPositionSelector fingerPosition={workout.intervals[currentIntervalIndex].leftHand.fingerPosition} handleFingerPosition={handleLeftFingerPosition} index={currentIntervalIndex} />
                        </div> :
                            <p>None</p>
                        }
                    </div>
                    <div className="w-1/2 flex flex-col items-center space-y-2">
                        <h3 className="font-md text-sm text-slate-200">Right Hand</h3>
                        {workout.intervals[currentIntervalIndex].rightHand.hold ? <div>
                            <p className="mt-1 text-center text-sm text-slate-300">{workout.intervals[currentIntervalIndex].rightHand?.hold.title}</p>
                            <p className="mt-1 mb-2 text-center text-sm text-slate-300">{workout.intervals[currentIntervalIndex].rightHand.hangboard.title}</p>
                            <FingerPositionSelector fingerPosition={workout.intervals[currentIntervalIndex].rightHand.fingerPosition} handleFingerPosition={handleRightFingerPosition} index={currentIntervalIndex} />
                        </div> :
                            <p>None</p>}
                    </div>
                </section>
            </section>
            <section id="todo-intervals" className="flex flex-col mt-16 shadow shadow-slate-700 w-5/6 p-4 overflow-auto">
                <h2 className="text-med font-md text-slate-200 text-center">Workout</h2>
                <IntervalsTable
                    intervals={workout.intervals}
                    handleEditInterval={handleEditInterval}
                    handleAddInterval={handleAddInterval}
                    handleDeleteInterval={handleDeleteInterval}
                    currentIntervalIndex={currentIntervalIndex}
                />
            </section>
            <section id="completed-intervals">
            </section>
            <section>
                <h2 className="text-center mt-24 text-slate-200">Quick Workout Options</h2>
                {quickWorkouts.map(
                    (workout) => (
                        <div key={workout.name} className="flex flex-col">
                            <WorkoutOption
                                workout={workout}
                                handleQuickWorkout={handleQuickWorkout}
                            />
                        </div>
                    )
                )}
            </section>
        </div>
    )
}
