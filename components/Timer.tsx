import React, { useState, useEffect } from "react"
import {deepEqual} from 'deep-equal';
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

export type Action  = IHang | IPullup | ILegLift

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
    const [workoutConfig, setWorkoutConfig] = useState<IWorkout>(defaultWorkout);
    const [workoutStatus, setWorkoutStatus] = useState<string>(workoutStatusOptions.unconfigured);
    const [currentInterval, setCurrentInterval] = useState<number>(0);
    const [workoutSummary, setWorkoutSummary] = useState<IWorkout>({ name: "New workout", date: new Date(), intervals: [] });

    const [leftHand, setLeftHand] = useState<IHand>({hangboard: hangboards[0], fingerPosition: fingerPositions[0], hold: hangboards[0].holds[0]})
    //const [leftFingerPosition, setLeftFingerPosition] = useState<IFingerPosition>(fingerPositions[0])
    const [rightHand, setRightHand] = useState<IHand>({hangboard: hangboards[0], fingerPosition: fingerPositions[0], hold: hangboards[0].holds[0]})
    //const [rightFingerPosition, setRightFingerPosition] = useState<IFingerPosition>(fingerPositions[0])
    const [action, setAction] = useState<Action>({kind: 'hang', title: 'Hang'})
    let [pullupReps, setPullupReps] = useState<number>(1)



    useEffect(() => {
        handleResetTimer()
    }, [workoutConfig])


    const completeInterval = () => {
        if (workoutStatus == workoutStatusOptions.prep) {
            setWorkoutStatus(workoutStatusOptions.work)
            workTimer.start()
            playSwitchFx()
        }

        if (workoutStatus == workoutStatusOptions.work) {
            const newInterval: IInterval = {
                workInterval: workoutConfig.intervals[currentInterval].workInterval,
                restInterval: workoutConfig.intervals[currentInterval].restInterval,
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

            if (currentInterval < workoutConfig.intervals.length) {
                setWorkoutStatus(workoutStatusOptions.work)
                setCurrentInterval(currentInterval + 1)
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
        timer: workoutConfig.workInterval * 1000,
        expireImmediate: true,
        onExpire: completeInterval
    })

    const restTimer = useCountdownTimer({
        timer: workoutConfig.restInterval * 1000,
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
        setCurrentInterval(1)
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
            if (deepEqual(oldHand, newHand, {strict: true})) {
                return ({ hangboard: null, fingerPosition: null, hold: null})
            }
            else {
                return (newHand)
            }
        })
    }

    const handleLeftHand = (newHand: IHand) => {
        setLeftHand((oldHand: IHand) => {
            if (deepEqual(oldHand, newHand, {strict:true})) {
                return ({ hangboard: null, hold: null, fingerPosition: null })
            }
            else {
                return (newHand)
            }
        })
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
                    <div>{currentInterval} / {workoutConfig.intervals.length}</div>
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
                        setHand={setLeftHand}
                        currentHand={leftHand} />
                    <GrindStoneSelector
                        currentLeftHand={leftHand}
                        handleLeftHand={handleLeftHand}
                        currentRightHand={rightHand}
                        handleRightHand={handleRightHand} />
                    <SimpleboardSelector
                        currentHand={rightHand} 
                        setHand={setRightHand}
                        />
                </div>
            </section>
            <section className="flex max-w-3xl items-center">
                <div className="flex space-x-6 justify-center w-full">
                    <button className={`${action.kind === "hang" ? 'bg-emerald-500': 'bg-slate-600'} p-2 text-slate-100 rounded-md`} onClick={() => setAction({kind:"hang", title: 'Hang'})}>Hang</button>
                    <button className={`${action.kind === "pullup" ? 'bg-emerald-500': 'bg-slate-600'} p-2 text-slate-100 rounded-md`} onClick={() => setAction({kind:"pullup", reps: pullupReps, title: 'Pullup'})}>Pullup</button>
                </div>
            </section>
            <section className="max-w-3xl flex items-center w-5/6">

                <div className="w-1/2 flex flex-col items-center space-y-2">
                    <h3>Left Hand</h3>
                    <p>{leftHand.hold.title}</p>
                    <p>{leftHand.hangboard.title}</p>
                    <FingerPositionSelector fingerPosition={currentInterval.leftHand.fingerPosition} setFingerPosition={setLeftFingerPosition} fingerPositions={fingerPositions} />
                </div>
                <div className="w-1/2 flex flex-col items-center space-y-2">
                    <h3>Right Hand</h3>
                    <p>{rightHand.hold.title}</p>
                    <p>{rightHand.hangboard.title}</p>
                    <FingerPositionSelector fingerPosition={currentInterval.rightHand.fingerPosition} setFingerPosition={setRightFingerPosition} fingerPositions={fingerPositions} />
                </div>
            </section>
            <section className="max-w-6xl flex flex-col items-center">
                <IntervalsTable intervals={workoutSummary.intervals} handleEditInterval={handleEditInterval}/>
            </section>
            <section id="workoutconfig">
                <h2 className="text-center">Customize Workout</h2>
                <div className="bg-slate-700 rounded-sm p-8 mt-4">
                    <form className="flex flex-col justify-between md:flex-row md:items-center">
                        <div className="flex justify-between p-2 items-center">
                            <label className="px-4 text-lg">Prep</label>
                            <input className="w-12 bg-slate-500 rounded p-1 text-xl text-center  hover:scale-105" type="number" value={workoutConfig.prepInterval} onChange={(e) => { setWorkoutConfig({ ...workoutConfig, prepInterval: e.target.valueAsNumber }) }} />
                        </div>
                        <div className="flex justify-between p-2 items-center">
                            <label className="px-4 text-lg">Work</label>
                            <input className="w-12 bg-slate-500 rounded p-1 text-xl text-center  hover:scale-105" type="number" value={workoutConfig.workInterval} onChange={(e) => { setWorkoutConfig({ ...workoutConfig, workInterval: e.target.valueAsNumber }) }} />
                        </div>
                        <div className="flex justify-between p-2 items-center">
                            <label className="px-4 text-lg">Rest</label>
                            <input className="w-12 bg-slate-500 rounded p-1 text-xl text-center hover:scale-105" type="number" value={workoutConfig.restInterval} onChange={(e) => { setWorkoutConfig({ ...workoutConfig, restInterval: e.target.valueAsNumber }) }} />
                        </div>
                        <div className="flex justify-between p-2 items-center">
                            <label className="px-4 text-lg">Intervals</label>
                            <input className="w-12 bg-slate-500 rounded p-1 text-xl text-center hover:scale-105" type="number" value={workoutConfig.numIntervals} onChange={(e) => setWorkoutConfig({ ...workoutConfig, numIntervals: e.target.valueAsNumber })} />
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <h2 className="text-center mt-8">Quick Workout Options</h2>
                {quickWorkouts.map(
                    (workout) => (
                        <div key={workout.name} className="flex flex-col">
                            <WorkoutOption
                                name={workout.name}
                                workInterval={workout.workInterval}
                                restInterval={workout.restInterval}
                                numIntervals={workout.numIntervals}
                                setWorkoutConfig={setWorkoutConfig}
                            />
                        </div>
                    )
                )}
            </section>
        </div>
    )

}
