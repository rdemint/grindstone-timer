export default function WorkoutOption ({name, prepInterval, workInterval, restInterval, numIntervals, setWorkoutConfig}) {

    const handleClick = () => {
        console.log(name)
        console.log(prepInterval)
        console.log(workInterval)
        console.log(restInterval)
        console.log(numIntervals)
        setWorkoutConfig()
    }

    return(
        <div>
            <button className="hover:bg-slate-700" onClick={()=>setWorkoutConfig({name, prepInterval, workInterval, restInterval, numIntervals})}>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Prep</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{prepInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Work</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{workInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Rest</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{restInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Intervals</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{numIntervals}</p>
                </div>
            </button>
        </div>
    )
}