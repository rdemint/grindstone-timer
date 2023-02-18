import { IWorkout } from "./Timer"

export default function WorkoutOption ({workout, handleQuickWorkout}: {workout: IWorkout, handleQuickWorkout:Function}) {
    const {name, date, intervals} = workout;
    return(
        <div className="mt-12 border border-slate-700 rounded hover:shadow hover:shadow-sky-400 px-2 rounded">
            <button onClick={()=>handleQuickWorkout(workout)}>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-md text-center text-slate-200">{name}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-sm">Work</p>
                    <p className="w-12 text-md bg-slate-800 rounded text-center">{intervals[0].workInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-sm">Rest</p>
                    <p className="w-12 text-md bg-slate-800 rounded text-center">{intervals[0].restInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-sm">Intervals</p>
                    <p className="w-12 text-md bg-slate-800 rounded text-center">{intervals.length}</p>
                </div>
            </button>
        </div>
    )
}