import React from 'react'
import {IWorkout} from './Timer'

const WorkoutSummary: React.FC<IWorkout> = (props) => {
    const intervals = props.intervals

    return (
        <div>
            {intervals.length > 0 ?
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
                                {intervals.map((interval, i) => (
                                    <tr key={i} className="text-center">
                                        <td>{interval.leftHold.edge}</td>
                                        <td>{interval.rightHold.edge}</td>
                                        <td>{interval.workInterval}</td>
                                        <td>{interval.restInterval}</td>
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

export default WorkoutSummary