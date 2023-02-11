import React from 'react'
import IntervalsRow from './IntervalsRow'
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
                                    <IntervalsRow key={i} interval={interval}/>
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