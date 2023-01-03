import React, {useState, useReducer, useEffect} from "react"




export default function Timer() {
    
    let [workInterval, setWorkInterval] = useState(10)
    let [currentWorkInterval, setCurrentWorkInterval] = useState(1)

    
    let [restInterval, setRestInterval] = useState(90)
    let [currentRestInterval, setCurrentRestInterval] = useState(0)
    
    let [intervals, setIntervals] = useState(10)
    let [currentInterval, setCurrentInterval] = useState(0)
    
    let [time, setTime] = useState(workInterval)
    
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
        setTime(workInterval)
    }


    const handleSetWorkInterval = (value) => {
        setWorkInterval(value)
        setTime(value)
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
        if(currentInterval < intervals) {
            setCurrentInterval(currentInterval+1)
            setTime(workInterval)
            setIsResting(false)
        }    
        else if(currentInterval == intervals) {
            setWorkoutComplete(true)            
        }
    }

    const setTimerToRestInterval = () => {
            setTime(restInterval)
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

                <div className={`flex flex-col ${ getTimerTheme() } rounded max-w-5xl p-8`}>
                <div className="justify-center text-center flex space-x-4">
                        <div>Current interval</div>
                        <div>{currentInterval} / {intervals}</div>
                    </div>
                    <div className="justify-center items-center text-center flex space-x-4 text-4xl h-24">
                        {
                            isResting && timerIsActive ? <div className="text-slate-300">Rest:</div> : <div>Work:</div>
                        }
                        <div className="text-4xl">{time}</div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-100">
                        <button onClick={()=> handleStartTimer()} id="startTimer" className="bg-emerald-600  rounded p-2">Start</button>
                        <button onClick={()=> setTimerPaused(true)} id="pauseTimer" className="bg-sky-600  rounded p-2">Pause</button>
                        <button onClick={()=> handleResetTimer()} id="resetTimer" className="bg-pink-600 rounded p-2">Reset</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 bg-slate-700 rounded max-w-5xl p-8">
                    <form className="flex justify-center space-x-4">
                        <label className="w-12">Work</label>
                        <input className="w-8 bg-slate-500 rounded px-1" type="text" value={workInterval} onChange={(e)=> handleSetWorkInterval(e.target.value)}/>
                    </form>
                    <form className="flex justify-center space-x-4">
                        <label className="w-12"l>Rest</label>
                        <input className="w-8 bg-slate-500 rounded px-1" type="text" value={restInterval} onChange={(e)=> setRestInterval(e.target.value)}/>
                    </form>
                    <form className="flex justify-center space-x-4">
                        <label className="w-12"l>Intervals</label>
                        <input className="w-8 bg-slate-500 rounded px-1" type="text" value={intervals} onChange={(e)=> setIntervals(e.target.value)}/>
                    </form>
                </div>
        </div>
    )

}