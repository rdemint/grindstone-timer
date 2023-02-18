import { IWorkout } from './Timer';
import Workout from './Workout';

export default function Workouts({ workouts, setWorkouts}: { workouts: Array<IWorkout>, setWorkouts:Function }) {
    function handleEditWorkout(newWorkout: IWorkout, newWorkoutIndex: number) {
        let newWorkouts = [...workouts];
        newWorkouts[newWorkoutIndex] = newWorkout;
        setWorkouts(newWorkouts);
    }

    return (
        <div className="flex flex-col space-y-4 w-5/6 p-4 overflow-auto">
            {workouts?.map((workout, i) => (
                <Workout key={i} workout={workout} handleEditWorkout={handleEditWorkout} workoutIndex={i}/>
            ))}

        </div>

    )
}