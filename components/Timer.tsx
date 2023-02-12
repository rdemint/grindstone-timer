import React, { useState, useEffect } from "react"
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

    const workoutStatusOptions = { unconfigured: 'Please select an edge', ready: 'Ready', rest: 'REST', work: 'WORK', prep: 'PREP', completed: 'DONE!' }

    const [playPopFx] = useSound('/sounds/pop.mp3')
    const [playIntroFx] = useSound('/sounds/intro.wav')
    const [playSwitchFx] = useSound('/sounds/switch.wav')
    const [playEndFx] = useSound('/sounds/end.wav')

    let [prepTime, setPrepTime] = useState<number>(12);
    const [workout, setWorkout] = useState<IWorkout>(defaultWorkout);
    const [workoutStatus, setWorkoutStatus] = useState<string>(workoutStatusOptions.unconfigured);
    const [currentIntervalIndex, setCurrentIntervalIndex] = useState<number>(0);
    const [workoutSummary, setWorkoutSummary] = useState<IWorkout>({ name: "New workout", date: new Date(), intervals: [] });

    const [leftHand, setLeftHand] = useState<IHand>({ hangboard: hangboards[0], fingerPosition: fingerPositions[0], hold: hangboards[0].holds[0] })
    const [rightHand, setRightHand] = useState<IHand>({ hangboard: hangboards[0], fingerPosition: fingerPositions[0], hold: hangboards[0].holds[0] })
    const [action, setAction] = useState<Action>({ kind: 'hang', title: 'Hang' })
    let [reps, setReps] = useState<number>(1)



    useEffect(() => {
        handleResetTimer()
    }, [workout])


    const completeInterval = () => {
        if (workoutStatus == workoutStatusOptions.prep) {
            setWorkoutStatus(workoutStatusOptions.work)
            workTimer.start()
            playSwitchFx()
        }

        if (workoutStatus == workoutStatusOptions.work) {
            const newInterval: IInterval = {
                workInterval: workout.intervals[currentIntervalIndex].workInterval,
                restInterval: workout.intervals[currentIntervalIndex].restInterval,
                leftHand,
                rightHand,
                action,
            }
            setWorkoutSummary({
                ...workoutSummary,
                intervals: [...workoutSummary.intervals, newInterval]
            }
            )
            playSwitchFx()
            setWorkoutStatus(workoutStatusOptions.rest)
            restTimer.start()
        }
        else if (workoutStatus == workoutStatusOptions.rest) {

            if (currentIntervalIndex < workout.intervals.length) {
                setWorkoutStatus(workoutStatusOptions.work)
                setCurrentIntervalIndex(currentIntervalIndex + 1)
                workTimer.start()
                playSwitchFx()
            }
            else {
                setWorkoutStatus(workoutStatusOptions.completed)
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
        setWorkoutStatus(workoutStatusOptions.prep)
        prepTimer.start()
        playIntroFx()
    }

    const handlePauseTimer = () => {
        switch (workoutStatus) {
            case workoutStatusOptions.prep: prepTimer.pause()
            case workoutStatusOptions.work: workTimer.pause()
            case workoutStatusOptions.rest: restTimer.pause()
        }
    }

    const handleResetTimer = () => {
        playPopFx()
        setWorkoutStatus(workoutStatusOptions.ready)
        setCurrentIntervalIndex(1)
        prepTimer.reset()
        workTimer.reset()
        restTimer.reset()
    }

    function handleEditInterval(index, interval) {
        workoutSummary.intervals[index] = interval;
        setWorkoutSummary(workoutSummary);
    }

    const handleRightHand = (newHand: IHand) => {
        setRightHand((oldHand: IHand) => {
            if (equal(oldHand, newHand, { strict: true })) {
                return ({ hangboard: null, fingerPosition: null, hold: null })
            }
            else {
                return (newHand)
            }
        })
    }

    const handleLeftHand = (newHand: IHand) => {
        setLeftHand((oldHand: IHand) => {
            if (equal(oldHand, newHand, { strict: true })) {
                return ({ hangboard: undefined, hold: undefined, fingerPosition: undefined })
            }
            else {
                return (newHand)
            }
        })
    }

    function handleLeftFingerPosition(positionName) {
        let position = fingerPositions.find((el) => el.name === positionName);
        let newLeft = {
            ...leftHand,
            fingerPosition: position
        }
        setLeftHand(newLeft);
    }

    function handleRightFingerPosition(positionName) {
        let position = fingerPositions.find((el) => el.name === positionName);
        let newRight = {
            ...rightHand,
            fingerPosition: position
        }
        setRightHand(newRight);
    }

    const getTimerTheme = () => {
        if (workoutStatus === workoutStatusOptions.completed) {
            return 'bg-yellow-500'
        }

        else if (workoutStatus === workoutStatusOptions.work) {
            return 'bg-green-700'
        }
        else {
            return 'bg-slate-800'
        }
    }


    return (
        <div className="flex flex-col space-y-6 justify-center items-center w-full py-8">
            <section id="timerdisplay" className={`flex flex-col ${getTimerTheme()} justify-between rounded-sm max-w-3xl p-8 h-96 md:w-2/3`}>
                <div className="flex justify-center text-center space-x-4">
                    <div>INTERVAL</div>
                    <div>{currentIntervalIndex} / {workout.intervals.length}</div>
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-4 text-6xl h-24 text-slate-50">
                    <div>{workoutStatus}</div>
                    {workoutStatus === workoutStatusOptions.prep && <div>{prepTimer.countdown / 1000}</div>}
                    {workoutStatus === workoutStatusOptions.work && <div>{workTimer.countdown / 1000}</div>}
                    {workoutStatus === workoutStatusOptions.rest && <div>{restTimer.countdown / 1000}</div>}
                </div>
                <div className="flex items-center justify-center space-x-4 text-slate-100">
                    {!prepTimer.isRunning && !workTimer.isRunning && !restTimer.isRunning ?
                        <button onClick={() => handleStartTimer()} id="startTimer" className="bg-green-500 rounded p-2 w-16 md:w-36 hover:scale-105">START</button> :
                        <button onClick={() => handlePauseTimer()} id="pauseTimer" className="bg-sky-600  rounded p-2 w-16 md:w-36 hover:scale-105">PAUSE</button>}
                    <button onClick={() => handleResetTimer()} id="resetTimer" className="bg-pink-600 rounded p-2 w-16 md:w-36 hover:scale-105">RESET</button>
                </div>
            </section>
            <section id="hold-selection" className="max-w-3xl flex flex-col items-center w-5/6">
                <div className="flex w-full rounded justify-center">
                    <SimpleboardSelector
                        setHand={handleLeftHand}
                        currentHand={leftHand} />
                    <GrindStoneSelector
                        currentLeftHand={leftHand}
                        handleLeftHand={handleLeftHand}
                        currentRightHand={rightHand}
                        handleRightHand={handleRightHand} />
                    <SimpleboardSelector
                        currentHand={rightHand}
                        setHand={handleRightHand}
                    />
                </div>
            </section>
            <section className="flex max-w-3xl items-center">
                <div className="flex space-x-6 justify-center w-full">
                    <button className={`${action.kind === "hang" ? 'bg-emerald-500' : 'bg-slate-600'} p-2 text-slate-100 rounded-md`} onClick={() => setAction({ kind: "hang", title: 'Hang' })}>Hang</button>
                    <button className={`${action.kind === "pullup" ? 'bg-emerald-500' : 'bg-slate-600'} p-2 text-slate-100 rounded-md`} onClick={() => setAction({ kind: "pullup", reps: reps, title: 'Pullup' })}>Pullup</button>
                </div>
            </section>
            <section className="max-w-3xl flex items-center w-5/6">

                <div className="w-1/2 flex flex-col items-center space-y-2">
                    <h3>Left Hand</h3>
                    {leftHand.hold ? <div>
                        <p>{leftHand.hold.title}</p>
                        <p>{leftHand.hangboard.title}</p>
                    </div> :
                        <p>None</p>
                    }
                    <FingerPositionSelector fingerPosition={workout.intervals[currentIntervalIndex].leftHand.fingerPosition} handleFingerPosition={handleLeftFingerPosition} />
                </div>
                <div className="w-1/2 flex flex-col items-center space-y-2">
                    <h3>Right Hand</h3>
                    {rightHand.hold ? <div>
                        <p>{rightHand?.hold.title}</p>
                        <p>{rightHand.hangboard.title}</p>
                    </div> :
                        <p>None</p>}
                    <FingerPositionSelector fingerPosition={workout.intervals[currentIntervalIndex].rightHand.fingerPosition} handleFingerPosition={handleRightFingerPosition} />
                </div>
            </section>
            <section id="todo-intervals" className="flex flex-col items-center">
                <h2 className="text-xl">Workout</h2>
                <IntervalsTable intervals={workout.intervals} handleEditInterval={handleEditInterval} />
            </section>
            <section id="completed-intervals">
                {/* <IntervalsTable intervals={null} handleEditInterval={null} /> */}
            </section>
            <section>
                <h2 className="text-center mt-8">Quick Workout Options</h2>
                {quickWorkouts.map(
                    (workout) => (
                        <div key={workout.name} className="flex flex-col">
                            <WorkoutOption
                                workout={workout}
                                setWorkoutConfig={setWorkout}
                            />
                        </div>
                    )
                )}
            </section>
        </div>
    )

}
