import React, {useState, useEffect} from "react"

export default function Timer() {
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(0)

    const handleStart = ()=> {
        setIsActive(true)
        setIsPaused(false)
    }

    const handleReset = () => {
        setIsActive(false)
        setTime(0)
    }


    useEffect(()=> {
        let interval = null
        if (isActive && isPaused === false) {
            interval = setInterval(
                ()=> {
                    setTime((time) => time + 10)
                }, 10
            )
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
        }, [isActive, isPaused]
    )

    return (
        <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col bg-slate-500 h-24 border border-slate-600 rounded max-w-5xl border-white">
                    <div className="h-24 bg-slate-700 text-center">
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                        {("0" + Math.floor((time / 10) % 100)).slice(-2)}

                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <button onClick={()=> handleStart()} id="startTimer" className="bg-sky-400  rounded p-2">Start</button>
                        <button onClick={()=> setIsPaused(true)} id="pauseTimer" className="bg-sky-600  rounded p-2">Pause</button>
                        <button onClick={()=> handleReset()} id="resetTimer" className="bg-pink-400 rounded p-2">Reset</button>
                    </div>
                </div>
        </div>
    )

}