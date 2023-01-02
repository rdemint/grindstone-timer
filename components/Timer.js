import React, {useState, useReducer, useEffect} from "react"




export default function Timer() {
    
    const [workInterval, setWorkInterval] = useState(10)
    const [currentWorkInterval, setCurrentWorkInterval] = useState(1)

    const [isResting, setIsResting] = useState(true)

    const [restInterval, setRestInterval] = useState(90)
    const [currentRestInterval, setCurrentRestInterval] = useState(0)

    const [intervals, setIntervals] = useState(10)
    const [currentInterval, setCurrentInterval] = useState(0)

    const [time, setTime] = useState(workInterval)

    const [timerIsActive, setTimerActive] = useState(false)
    const [timerisPaused, setTimerPaused] = useState(false)


    const handleWorkInterval = (value) => {
        setWorkInterval(value)
        setTime(value)
    }
    
    const handleReset = () => {
        setTimerActive(false)
        setTimerPaused(false)
        setTime(10)
    }

    
    useEffect(()=> {
        let interval = null
        if (timerIsActive && timerisPaused == false && time > 0) {
            interval = setInterval(()=> setTime(time-1), 1000)
        }
        // else if time = 0 or < 0 then need to bump interval and switch between rest or active
        else if (time <= 0) {
            switch(isResting) {
                case true:
                    setCurrentRestInterval(currentRestInterval++)
                    // To do
                    break
                case false: 
                    setCurrentWorkInterval(currentWorkInterval++)
                    break
            } 

        }
        return () => clearInterval(interval)
    })


    return (
        <div className="flex flex-col space-y-6 justify-center items-center w-full">

                <div className="flex flex-col bg-slate-700 rounded max-w-5xl p-8">
                <div className="h-24 bg-slate-700 justify-center text-center flex space-x-4">
                        <div>Current interval</div>
                        <div>{currentInterval} / {intervals}</div>
                    </div>
                    <div className="h-24 bg-slate-700 justify-center text-center flex space-x-4">
                        <div>Timer</div>
                        <div>{time}</div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-100">
                        <button onClick={()=> setTimerActive(true)} id="startTimer" className="bg-emerald-600  rounded p-2">Start</button>
                        <button onClick={()=> setTimerPaused(true)} id="pauseTimer" className="bg-sky-600  rounded p-2">Pause</button>
                        <button onClick={()=> handleReset()} id="resetTimer" className="bg-pink-600 rounded p-2">Reset</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 bg-slate-700 rounded max-w-5xl p-8">
                    <form className="flex justify-center space-x-4">
                        <label className="w-12">Work</label>
                        <input className="w-8 bg-slate-500 rounded px-1" type="text" value={workInterval} onChange={(e)=> handleWorkInterval(e.target.value)}/>
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