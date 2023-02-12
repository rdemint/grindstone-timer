import React from 'react'
import IntervalsRow from './IntervalsRow'
import { IInterval} from './Timer'

export default function IntervalsTable ({ intervals, handleEditInterval }: {intervals: Array<IInterval>, handleEditInterval:Function}) {
    return (
        <div className='w-72 sm:w-96 lg:w-full'>
            {intervals.length > 0 ?
                <div className='bg-gray-800 rounded  py-4'>
                    <div className="overflow-auto whitespace-nowrap">
                        <table>
                            <thead>
                                <tr className="text-left">
                                    <th className='p-4'>Left Hold</th>
                                    <th className='p-4'>Finger Position</th>
                                    <th className='p-4'>Right Hold</th>
                                    <th className='p-4'>Finger Position</th>
                                    <th className='p-2'>Work</th>
                                    <th className='p-2'>Rest</th>
                                    <th className='p-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intervals.map((interval, i) => (
                                    <IntervalsRow key={i} intervalIndex={i} interval={interval} handleEditInterval={handleEditInterval}/>
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
