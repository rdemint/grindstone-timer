import React from 'react'
import { IWorkout } from './Timer'

const WorkoutSummary: React.FC<IWorkout> = (props) => {
    const intervals = props.intervals

    return (
        <div className='w-72 sm:w-96 lg:w-full'>
            {intervals.length > 0 ?
                <div className='border border-slate-300 rounded'>
                    <h4 className="text-center py-4">Workout Summary</h4>
                    <div className="overflow-auto whitespace-nowrap">
                        <table >
                            <thead>
                                <tr className="w-full text-left">
                                    <th className='p-4'>Board</th>
                                    <th className='p-4'>Left Hold</th>
                                    <th className='p-4'>Finger Position</th>
                                    <th className='p-4'>Board</th>
                                    <th className='p-4'>Right Hold</th>
                                    <th className='p-4'>Finger Position</th>
                                    <th className='p-4'>Work</th>
                                    <th className='p-4'>Rest</th>
                                    <th className='p-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intervals.map((interval, i) => (
                                    <tr key={i} className="text-left">
                                        <td className='px-4 py-1'>{interval.leftHold.hangboardTitle}</td>
                                        <td className='px-4 py-1'>{interval.leftHold.title}</td>
                                        <td className='px-4 py-1'>{interval.leftFingerPosition.title}</td>
                                        <td className='px-4 py-1'>{interval.rightHold.hangboardTitle}</td>
                                        <td className='px-4 py-1'>{interval.rightHold.title}</td>
                                        <td className='px-4 py-1'>{interval.rightFingerPosition.title}</td>
                                        <td className='px-4 py-1'>{interval.workInterval}</td>
                                        <td className='px-4 py-1'>{interval.restInterval}</td>
                                        <td className='px-4 py-1'>{interval.action}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>
                :
                <div className="grow text-slate-400 py-4">No intervals completed yet.</div>
            }
        </div>

    )
}

export default WorkoutSummary