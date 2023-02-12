import { IWorkout } from "./Timer"

export default function WorkoutOption ({workout, setWorkoutConfig}: {workout: IWorkout, setWorkoutConfig: Function}) {
    const {name, date, intervals} = workout;
    return(
        <div className="m-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:scale-105">
            <button onClick={()=>setWorkoutConfig(workout)}>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg text-center">{name}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Work</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{intervals[0].workInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Rest</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{intervals[0].restInterval}</p>
                </div>
                <div className="flex justify-between p-2 items-center">
                    <p className="px-4 text-lg">Intervals</p>
                    <p className="w-12 bg-slate-500 rounded p-1 text-xl text-center">{intervals.length}</p>
                </div>
            </button>
        </div>
    )
}