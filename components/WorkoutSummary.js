export default function WorkoutSummary({ workoutSummary }) {
    console.log(workoutSummary)
    console.log(typeof workoutSummary)
    return (
        <div className="flex flex-col p-4 bg-slate-700">
            {workoutSummary.map((workout, i) => (
                <div key={i} className="flex space-x-4">
                    <div>{workout.leftHand} / {workout.rightHand} </div>
                    <div>Work: {workout.workTime}</div>
                    <div>Rest: {workout.restTime}</div>
                </div>
            ))}
        </div>
    )
}