import React, {useState, useRef, useEffect} from "react"

export default function Timer() {
    
    const [workInterval, setWorkInterval] = useState(10)

    const [restInterval, setRestInterval] = useState(90)
    const [time, setTime] = useState(workInterval)

    const [isActive, setActive] = useState(false)
    const [isPaused, setisPaused] = useState(false)


    const handleWorkInterval = (value) => {
        setWorkInterval(value)
        setTime(value)
    }
    
    const handleReset = () => {
        setActive(false)
        setisPaused(false)
        setTime(10)
    }

    
    useEffect(()=> {
        let interval = null
        if (isActive && isPaused == false && time > 0) {
            interval = setInterval(()=> setTime(time-1), 1000)
        }
        return () => clearInterval(interval)
    })


    return (
        <div className="flex flex-col space-y-6 justify-center items-center w-full">

                <div className="flex flex-col bg-slate-700 rounded max-w-5xl p-8">
                    <div className="h-24 bg-slate-700 justify-center text-center flex space-x-4">
                        <div>Timer</div>
                        <div>{time}</div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-100">
                        <button onClick={()=> setActive(true)} id="startTimer" className="bg-emerald-600  rounded p-2">Start</button>
                        <button onClick={()=> setisPaused(true)} id="pauseTimer" className="bg-sky-600  rounded p-2">Pause</button>
                        <button onClick={()=> handleReset()} id="resetTimer" className="bg-pink-600 rounded p-2">Reset</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 bg-slate-700 rounded max-w-5xl p-8">
                    <form className="flex justify-center space-x-4">
                        <label className="w-8">Work</label>
                        <input className="w-8 bg-slate-500 rounded px-1" type="text" value={workInterval} onChange={(e)=> handleWorkInterval(e.target.value)}/>
                    </form>
                    <form className="flex justify-center space-x-4">
                        <label className="w-8"l>Rest</label>
                        <input className="w-8 bg-slate-500 rounded px-1" type="text" value={restInterval} onChange={(e)=> setRestInterval(e.target.value)}/>
                    </form>
                </div>
        </div>
    )

}