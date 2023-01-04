import React, {useState, useReducer, useEffect, use} from "react"
import useSound from "use-sound"
import { useCountdownTimer } from "use-countdown-timer"

export default function Timer() {



    const [playPopFx] = useSound('/sounds/pop.mp3')
    const [playIntroFx] = useSound('/sounds/intro.wav')
    const [playSwitchFx] = useSound('/sounds/switch.wav')
    const [playEndFx] = useSound('/sounds/end.wav')

    
    let [workoutConfig, setWorkoutConfig] = useState({
        prepInterval: 3,
        workInterval: 10,
        restInterval: 90,
        numIntervals: 10
    })


    const intervalTypes = {restInterval: 'REST', workInterval: 'WORK', prepInterval: 'PREP', completedInterval: 'DONE!'}
    const [currentIntervalType, setCurrentIntervalType] = useState(intervalTypes.prepInterval)

    const completeInterval = () => {
        if(currentIntervalType == intervalTypes.prepInterval) {
            setCurrentIntervalType(intervalTypes.workInterval)
            setCurrentTimer(workTimer)
            workTimer.start()
            playSwitchFx()
        }
        
        if(currentIntervalType == intervalTypes.workInterval) {
            setCurrentIntervalType(intervalTypes.restInterval)
            setCurrentTimer(restTimer)
            restTimer.start()
            playSwitchFx()
        } 
        else if(currentIntervalType == intervalTypes.restInterval) {
            if(currentInterval < workoutConfig.numIntervals) {
                setCurrentIntervalType(intervalTypes.workInterval)
                setCurrentTimer(workTimer)
                interval = ++interval
                workTimer.start()
                playSwitchFx()
            }    
            else if(currentInterval == workoutConfig.numIntervals) {
                setCurrentIntervalType(intervalTypes.completedInterval)
                playEndFx()
            }

            else {
                //
            }
        }        
    }

    let prepTimer = useCountdownTimer({
        timer: workoutConfig.prepInterval*1000,
        autostart: false,
        onExpire: completeInterval
    })

    const updatePrepTimer = (seconds) => {
        prepTimer = {
            ...prepTimer,
            timer: seconds
        }
    }

    const workTimer = useCountdownTimer({
        timer: workoutConfig.workInterval * 1000, 
        onExpire: completeInterval
    })

    const restTimer = useCountdownTimer({
        timer: workoutConfig.restInterval * 1000,
        onExpire: completeInterval
    })

    let [currentTimer, setCurrentTimer] = useState(prepTimer)

    let currentInterval = 1


    const handleTimerConfig = (e) => {
        setWorkoutConfig({
            ...workoutConfig,
            prepInterval: e.target.value
        })
    }

    const handleStartTimer = () => {
        playIntroFx()
        prepTimer.start()
    }

    const handlePauseTimer = () => {
        switch(currentIntervalType) {
            case intervalTypes.prepInterval: prepTimer.pause()
            case intervalTypes.workInterval: workTimer.pause()
            case intervalTypes.restInterval: restTimer.pause()
        } 
    }

    const handleResetTimer = () => {
        setCurrentIntervalType(prepTimer)
        prepTimer.reset()
        workTimer.reset()
        restTimer.reset()
    }


    const getTimerTheme = () => {
        if(currentIntervalType === intervalTypes.completedInterval) {
            return 'bg-yellow-500'
        }

        else if(currentIntervalType === intervalTypes.workInterval) {
            return 'bg-green-700'
        }
        else {
            return 'bg-slate-800'
        }

    }



    return (
        <div className="flex flex-col space-y-6 justify-center items-center w-full py-8">
                <div className={`flex flex-col ${ getTimerTheme() } justify-between rounded-sm max-w-5xl p-8 h-96 md:w-2/3`}>
                <div className="flex justify-center text-center space-x-4">
                        <div>INTERVAL</div>
                        <div>{currentInterval} / {workoutConfig.numIntervals}</div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center space-y-4 text-6xl h-24">
                        <div>{currentIntervalType}</div>
                        <div>
                            { currentIntervalType === intervalTypes.prepInterval && <div>{prepTimer.countdown / 1000}</div>}
                            { currentIntervalType === intervalTypes.workInterval && <div>{workTimer.countdown / 1000}</div>}
                            { currentIntervalType === intervalTypes.restInterval && <div>{restTimer.countdown / 1000}</div>}
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-100">
                        <button onClick={()=> handleStartTimer()} id="startTimer"  className="bg-green-500  rounded p-2 w-16">START</button>
                        <button onClick={()=> handlePauseTimer()} id="pauseTimer" className="bg-sky-600  rounded p-2 w-16">PAUSE</button>
                        <button onClick={()=> handleResetTimer()} id="resetTimer" className="bg-pink-600 rounded p-2 w-16">RESET</button>
                    </div>
                </div>
                <div className="bg-slate-800 rounded-sm p-8 md:w-2/3">
                    <form className="flex flex-col md:flex-row items-center justify-center">
                        <div className="flex justify-between p-2">
                            <label className="px-2">Prep</label> 
                            <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.prepInterval} onChange={(e)=> {handleTimerConfig(e)}}/>
                        </div>
                        <div className="flex justify-between p-2">
                            <label className="px-2">Work</label>
                            <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.workInterval} onChange={(e)=> {setWorkoutConfig({...workoutConfig, workInterval: e.target.value})}}/>
                        </div>
                        <div className="flex justify-between p-2">
                            <label className="px-2">Rest</label> 
                            <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.restInterval} onChange={(e)=> setWorkoutConfig({...workoutConfig, restInterval: e.target.value})}/>
                        </div>
                        <div className="flex justify-between p-2">
                            <label className="px-2">Intervals</label> 
                            <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.numIntervals} onChange={(e)=> setWorkoutConfig({...workoutConfig, numIntervals: e.target.value})}/>
                        </div>
                    </form>
                </div>
        </div>
    )

}