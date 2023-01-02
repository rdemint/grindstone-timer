import React, {useState, useRef, useEffect} from "react"

export default function Timer() {
    
    const startTime = Date.parse(new Date())
    const [time, setTime] = useState(10)

    const [isActive, setActive] = useState(false)
    const [isPaused, setisPaused] = useState(false)

    const handleReset = () => {
        setActive(false)
        setisPaused(false)
        setTime(10)
    }

    useEffect(()=> {
        let interval = null
        if (isActive && isPaused == false) {
            interval = setInterval(()=> setTime(time-1), 1000)
        }
        return () => clearInterval(interval)
    })


    return (
        <div className="flex flex-col justify-center items-center w-full">

                <div className="flex flex-col bg-slate-700 h-24 border border-slate-600 rounded max-w-5xl border-white">
                    <div className="h-24 bg-slate-700 justify-center text-center flex space-x-4">
                        <div>{time}</div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <button onClick={()=> setActive(true)} id="startTimer" className="bg-sky-400  rounded p-2">Start</button>
                        <button onClick={()=> setisPaused(true)} id="pauseTimer" className="bg-sky-600  rounded p-2">Pause</button>
                        <button onClick={()=> handleReset()} id="resetTimer" className="bg-pink-400 rounded p-2">Reset</button>
                    </div>
                </div>
        </div>
    )

}