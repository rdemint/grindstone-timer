export default function WorkoutSummary({ workoutSummary }) {
    return (
        <div>
            {workoutSummary.length > 0 ?
                <>
                    <h4 className="text-center py-4">Workout Summary</h4>
                    <table className="w-72">
                        <thead>
                            <tr className="w-full">
                                <th>Left</th>
                                <th>Right</th>
                                <th>Work</th>
                                <th>Rest</th>
                            </tr>
                        </thead>
                        <tbody>
                                {workoutSummary.map((workout, i) => (
                                    <tr key={i} className="text-center">
                                        <td>{workout.leftHand}</td>
                                        <td>{workout.rightHand}</td>
                                        <td>{workout.workTime}</td>
                                        <td>{workout.restTime}</td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </>
                :
                <div className="text-slate-400 py-4">No intervals completed yet.</div>
            }
        </div>

    )
}