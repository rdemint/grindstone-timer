import React, { useState, useEffect } from "react"
import useSound from "use-sound"
import { useCountdownTimer } from "use-countdown-timer"
import WorkoutOption from "./WorkoutOption"
import WorkoutSummary from "./WorkoutSummary"
import defaultWorkout from "../lib/defaultWorkout"
import quickWorkouts from "../lib/quickWorkouts"
import GrindStoneSelector from "./GrindstoneSelector"
import SimpleboardSelector from "./SimpleboardSelector"

export default function Timer() {

    interface IHangboard {
        name: String;
        edgeMap: Array<any>
    }


    const grindstone = {
        name: 'grindstone',
        edgeMap: [
            ['10', '8'],
            ['30', '25'],
            ['20', '15'],
        ]
    }

    const simpleboard = {
        name: 'simple-board',
        edgeMap: [
            ['10'],
            ['8'],
            ['6']
        ]
    }

    const workoutStatusOptions = { unconfigured: 'Please select an edge', ready: 'Ready', rest: 'REST', work: 'WORK', prep: 'PREP', completed: 'DONE!' }


    const [playPopFx] = useSound('/sounds/pop.mp3')
    const [playIntroFx] = useSound('/sounds/intro.wav')
    const [playSwitchFx] = useSound('/sounds/switch.wav')
    const [playEndFx] = useSound('/sounds/end.wav')

    const [workoutConfig, setWorkoutConfig] = useState(defaultWorkout)
    const [workoutStatus, setWorkoutStatus] = useState(workoutStatusOptions.unconfigured)
    const [currentInterval, setCurrentInterval] = useState(1)
    const [workoutSummary, setWorkoutSummary] = useState([])


    interface IHold {
        hangboard: IHangboard;
        edge: String;
    }

    const [leftHand, setLeftHand] = useState<IHold>({ hangboard: grindstone, edge: '30' })
    const [rightHand, setRightHand] = useState<IHold>({ hangboard: grindstone, edge: '30' })


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
            setWorkoutSummary([
                ...workoutSummary,
                { leftHand: leftHand, rightHand: rightHand, workTime: workoutConfig.workInterval, restTime: workoutConfig.restInterval }
            ]
            )
            playSwitchFx()
            setWorkoutStatus(workoutStatusOptions.rest)
            restTimer.start()
        }
        else if (workoutStatus == workoutStatusOptions.rest) {

            if (currentInterval < workoutConfig.numIntervals) {
                setWorkoutStatus(workoutStatusOptions.work)
                setCurrentInterval(currentInterval + 1)
                workTimer.start()
                playSwitchFx()
            }
            else if (currentInterval == workoutConfig.numIntervals) {
                setWorkoutStatus(workoutStatusOptions.completed)
                playEndFx()
            }

            else {
                //
            }
        }
    }

    const prepTimer = useCountdownTimer({
        timer: workoutConfig.prepInterval * 1000,
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

    const handleRightHandClick = (newHold: IHold) => {
        setRightHand((oldHold: IHold) => {
            if (newHold.edge == oldHold.edge && newHold.hangboard.name === oldHold.hangboard.name) {
                return ({ ...oldHold, edge: 'None' })
            }
            else {
                return ({ hangboard: newHold.hangboard, edge: newHold.edge })
            }
        })
    }

    const handleLeftHandClick = (newHold: IHold) => {
        setLeftHand((oldHold: IHold) => {
            if (newHold.edge == oldHold.edge && newHold.hangboard.name === oldHold.hangboard.name) {
                return ({ ...newHold, edge: 'None' })
            }
            else {
                return ({ hangboard: newHold.hangboard, edge: newHold.edge })
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
                    <div>{currentInterval} / {workoutConfig.numIntervals}</div>
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
                        hangboard={simpleboard}
                        handleEdgeClick={handleLeftHandClick}
                        handHold={leftHand} />
                    <GrindStoneSelector
                        hangboard={grindstone}
                        leftHand={leftHand}
                        setLeftHand={handleLeftHandClick}
                        rightHand={rightHand}
                        setRightHand={handleRightHandClick} />
                    <SimpleboardSelector
                        hangboard={simpleboard}
                        handleEdgeClick={handleRightHandClick}
                        handHold={rightHand} />
                </div>
                <div className="flex justify-between space-x-4 p-4 text-slate-300">
                    <div className="flex space-x-4">
                        <h3>Left:</h3>
                        <p>{leftHand.edge}</p>
                    </div>
                    <div className="flex space-x-4">
                        <h3>Right:</h3>
                        <p>{rightHand.edge}</p>
                    </div>
                </div>
            </section>
            <WorkoutSummary workoutSummary={workoutSummary} />
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
                            <input className="w-12 bg-slate-500 rounded p-1 text-xl text-center  hover:scale-105" type="number" value={workoutConfig.workInterval} onChange={(e) => { console.log(e); setWorkoutConfig({ ...workoutConfig, workInterval: e.target.valueAsNumber }) }} />
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
                                prepInterval={workout.prepInterval}
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