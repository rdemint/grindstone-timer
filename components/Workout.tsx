import { IWorkout } from "./Timer";
import IntervalsTable from "./IntervalsTable";

export default function Workout({ workout, handleEditWorkout, workoutIndex=-1 }: { workout: IWorkout, handleEditWorkout:Function, workoutIndex:number }) {
    function handleEditInterval(intervalIndex, newInterval) {
        let newIntervals = [...workout.intervals]; 
        newIntervals[intervalIndex] = newInterval;
        handleEditWorkout({...workout, intervals: newIntervals}, workoutIndex);
    }
    
    return (
        <div>
            <h2 className="text-xl">{workout.date.toDateString()}</h2>
            <IntervalsTable intervals={workout.intervals} handleEditInterval={handleEditInterval}/>
        </div>
    )
}