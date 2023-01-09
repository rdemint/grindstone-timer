export default function WorkoutSummary({ workoutSummary }) {
    return (
        <div>
            <h4 className="text-center py-4">Workout Summary</h4>
            <div className="flex flex-col p-4 bg-slate-700">
                {workoutSummary.map((workout, i) => (
                    <div key={i} className="flex space-x-4 justify-between">
                        <div>L: {workout.leftHand}mm</div>
                        <div>R:{workout.rightHand}mm </div>
                        <div>Work: {workout.workTime}(s)</div>
                        <div>Rest: {workout.restTime}(s)</div>
                    </div>
                ))}
            </div>
        </div>

    )
}