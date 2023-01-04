import React, {useState, useReducer, useEffect} from "react"

export default function Timer() {
    
    let [workoutConfig, setWorkoutConfig] = useState({
        prepInterval: 3,
        workInterval: 10,
        restInterval: 90,
        numIntervals: 10
    })

    const timerStatuses = {notStarted: 'notstarted', started: 'started', paused: 'paused', completed: 'completed'}
    const intervalTypes = {restInterval: 'REST', workInterval: 'WORK', prepInterval: 'PREP'}

    const initTimer = {
        status: timerStatuses.notStarted,
        currentInterval: 1,
        currentIntervalType: intervalTypes.prepInterval,
    }
    
    const [timer, setTimer] = useState(initTimer)
    
    let [time, setTime] = useState(workoutConfig.prepInterval)
    

    const handleStartTimer = () => {
        setTimer({
            ...timer,
            status: timerStatuses.started,
        })

    }

    const handlePauseTimer = () => {
        setTimer({
            ...timer,
            status: timerStatuses.paused
        })
    }

    const handleResetTimer = () => {
        setTimer(initTimer)
        setTime(workoutConfig.prepInterval)
    }

    
    const completeInterval = () => {

        if(timer.currentIntervalType == intervalTypes.prepInterval) {
            //work interval always follows prep
            setTimer({
                ...timer,
                currentIntervalType: intervalTypes.workInterval,
            })
            setTime(workoutConfig.workInterval)
        }
        
        if(timer.currentIntervalType == intervalTypes.workInterval) {
            //rest interval always follows work interval
            setTimer({
                ...timer,
                currentIntervalType: intervalTypes.restInterval
            })
            setTime(workoutConfig.restInterval)
        } 
        else if(timer.currentIntervalType === intervalTypes.restInterval) {
            //increment interval once rest is completed
            if(timer.currentInterval < workoutConfig.numIntervals) {
                setTimer(
                    {
                        ...timer, 
                        currentInterval: timer.currentInterval+1,
                        currentIntervalType: intervalTypes.workInterval
                    })
                setTime(workoutConfig.workInterval)
            }    
            else if(timer.currentInterval === workoutConfig.numIntervals) {
                //all intervals are complete
                setTimer({
                    ...timer,
                    status: timerStatuses.completed
                })
            }
        }        
    }

    const getTimerTheme = () => {
        if(timer.status === timerStatuses.completed) {
            return 'bg-yellow-500'
        }

        else if(timer.status === timerStatuses.started && timer.currentIntervalType === intervalTypes.workInterval) {
            return 'bg-green-700'
        }
        else {
            return 'bg-slate-700'
        }

    }

    
    useEffect(()=> {
        let interval = null
        if (timer.status === timerStatuses.started && time > 0) {
            interval = setInterval(()=> setTime(time-1), 1000)
        }
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
                        <div>{timer.currentInterval} / {workoutConfig.numIntervals}</div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center space-y-4 text-6xl h-24">
                        <div>{timer.currentIntervalType}</div>
                        <div>{time}</div>
                        
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-slate-100">
                        <button onClick={()=> handleStartTimer()} id="startTimer"  className="bg-green-500  rounded p-2 w-16">START</button>
                        <button onClick={()=> handlePauseTimer()} id="pauseTimer" className="bg-sky-600  rounded p-2 w-16">PAUSE</button>
                        <button onClick={()=> handleResetTimer()} id="resetTimer" className="bg-pink-600 rounded p-2 w-16">RESET</button>
                    </div>
                </div>
                <div className="bg-slate-700 rounded p-8">
                    <form className="flex flex-col md:flex-row">
                        <div className="flex justify-between p-2">
                            <label className="px-2">Prep</label> 
                            <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.prepInterval} onChange={(e)=> setWorkoutConfig({...workoutConfig, prepInterval: e.target.value})}/>
                        </div>
                        <div className="flex justify-between p-2">
                            <label className="px-2">Work</label>
                            <input className="w-8 bg-slate-500 rounded px-1 text-center" type="text" value={workoutConfig.workInterval} onChange={(e)=> {
                                setWorkoutConfig({...workoutConfig, workInterval: e.target.value})
                                }}/>
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