import React, {useState, useReducer, useEffect} from "react"




export default function Timer() {


    let [workoutConfig, setWorkoutConfig] = useState({
        workInterval: 10,
        restInterval: 90,
        numIntervals: 10
    })

    
    let [currentInterval, setCurrentInterval] = useState(1)
    
    let [time, setTime] = useState(workoutConfig.workInterval)
    
    const [timerIsActive, setTimerActive] = useState(false)
    const [timerisPaused, setTimerPaused] = useState(false)
    const [workoutIsComplete, setWorkoutComplete] = useState(false)

    let [isResting, setIsResting] = useState(true)

    const handleStartTimer = () => {
        setTimerActive(true)
        setTimerPaused(false)
        setIsResting(false)

    }

    const handleResetTimer = () => {
        setWorkoutComplete(false)
        setTimerActive(false)
        setIsResting(true)
        setCurrentInterval(0)
        setTimerPaused(false)
        setTime(workoutConfig.workInterval)
    }

    
    const completeInterval = () => {
        if(!isResting && timerIsActive) {
            setTimerToRestInterval()
            
        } 
        else if(isResting && timerIsActive) {
               setTimerToWorkInterval() 
            }        
    }

    const setTimerToWorkInterval = () => {
        if(currentInterval < workoutConfig.numIntervals) {
            setCurrentInterval(currentInterval+1)
            setTime(workoutConfig.workInterval)
            setIsResting(false)
        }    
        else if(currentInterval == workoutConfig.numIntervals) {
            setWorkoutComplete(true)            
        }
    }

    const setTimerToRestInterval = () => {
            setTime(workoutConfig.restInterval)
            setIsResting(true)
    }

    const getTimerTheme = () => {
        if(!isResting && !workoutIsComplete) {
            return 'bg-green-700'
        }
        else if(workoutIsComplete) {
            return 'bg-yellow-500'
        }
        else {
            return 'bg-slate-700'
        }

    }

    
    useEffect(()=> {
        let interval = null
        if (timerIsActive && timerisPaused == false && time > 0) {
            interval = setInterval(()=> setTime(time-1), 1000)
        }
        // else if time = 0 or < 0 then need to bump interval and switch between rest or active
        else if (time <= 0) {
           completeInterval()
        }
        return () => clearInterval(interval)
    })


    return (
        <div className="flex flex-col space-y-6 justify-center items-center w-full">
                <div className={`flex flex-col ${ getTimerTheme() } justify-between rounded max-w-5xl p-8 h-96`}>
                <div className="flex justify-center text-center space-x-4">
                        <div>INTERVAL</div>
                        <div>{currentInterval} / {workoutConfig.numIntervals}</div>
                    </div>
                    <div className="justify-center items-center text-center flex space-x-4 text-6xl h-24">
                        {
                            isResting && timerIsActive ? <div className="text-slate-300">REST:</div> : <div>WORK:</div>
                        }
                        <div className="text-6xl">{time}</div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-100">
                        <button onClick={()=> handleStartTimer()} id="startTimer"  className="bg-green-500  rounded p-2 w-16">START</button>
                        <button onClick={()=> setTimerPaused(true)} id="pauseTimer" className="bg-sky-600  rounded p-2 w-16">PAUSE</button>
                        <button onClick={()=> handleResetTimer()} id="resetTimer" className="bg-pink-600 rounded p-2 w-16">RESET</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 bg-slate-700 rounded max-w-5xl p-8">
                    <form className="flex justify-center space-x-4">
                        <label className="w-12">Work</label>
                        <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.workInterval} onChange={(e)=> {
                            setWorkoutConfig({...workoutConfig, workInterval: e.target.value})
                            setTime(e.target.value)
                            }}/>
                    </form> 
                    <form className="flex justify-center space-x-4"> 
                        <label className="w-12"l>Rest</label> 
                        <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.restInterval} onChange={(e)=> setWorkoutConfig({...workoutConfig, restInterval: e.target.value})}/>
                    </form> 
                    <form className="flex justify-center space-x-4"> 
                        <label className="w-12"l>Intervals</label> 
                        <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.numIntervals} onChange={(e)=> setWorkoutConfig({...workoutConfig, numIntervals: e.target.value})}/>
                    </form>
                </div>
        </div>
    )

}