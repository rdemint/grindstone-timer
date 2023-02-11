import React from 'react'
import { IWorkout } from './Timer'

const IntervalsTable: React.FC<IWorkout> = ({ intervals }) => {

    return (
        <div className='w-72 sm:w-96 lg:w-4/5'>
            {intervals.length > 0 ?
                <div className='bg-gray-800 rounded  py-4'>
                    <div className="overflow-auto whitespace-nowrap">
                        <table>
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
                                    <th className='p-4'>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intervals.map((interval, i) => (
                                    <tr key={i} className="text-left text-slate-300">
                                        <td className='px-4 py-1'>{interval.leftHold.hangboardTitle}</td>
                                        <td className='px-4 py-1'>{interval.leftHold.title}</td>
                                        <td className='px-4 py-1'>{interval.leftFingerPosition.title}</td>
                                        <td className='px-4 py-1'>{interval.rightHold.hangboardTitle}</td>
                                        <td className='px-4 py-1'>{interval.rightHold.title}</td>
                                        <td className='px-4 py-1'>{interval.rightFingerPosition.title}</td>
                                        <td className='px-4 py-1'>{interval.workInterval}</td>
                                        <td className='px-4 py-1'>{interval.restInterval}</td>
                                        {interval.action.kind === "pullup" && <td className='px-4 py-1 text-justify'>{interval.action.reps} {interval.action.kind}</td>}
                                        {interval.action.kind === 'hang' && <td className='px-4 py-1 text-justify'> {interval.action.kind}</td>}
                                        {interval.action.kind === 'leglift' && <td className='px-4 py-1 text-justify'>{interval.action.reps} {interval.action.kind}</td>}
                                        <td className='px-4 py-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>

                                        </td>
                                    </tr>
                                )

                                )}

                            </tbody>
                        </table>
                    </div>

                </div>
                :
                <div className='flex justify-center'>
                    <div className="text-slate-400 py-4">No intervals yet.</div>
                </div>
            }
        </div>
    )
}

export default IntervalsTable