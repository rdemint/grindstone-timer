import React from 'react'
import IntervalsRow from './IntervalsRow'
import { IInterval } from './Timer'

export default function IntervalsTable({ intervals, handleEditInterval, handleAddInterval, handleDeleteInterval, currentIntervalIndex }: { intervals: Array<IInterval>, handleEditInterval: Function, handleAddInterval: Function, handleDeleteInterval: Function, currentIntervalIndex:number }) {
    return (
        <div className='sm:w-96 lg:w-full mt-4'>
            {intervals.length > 0 ?
                <div className='rounded  py-4'>
                    <div className="overflow-auto whitespace-nowrap px-2">
                        <table>
                            <thead>
                                <tr className="text-left text-slate-200 text-sm">
                                    <th></th>
                                    <th className='px-4 py-1 font-normal'>Left Hold</th>
                                    <th className='px-4 py-1 font-normal'>Finger Position</th>
                                    <th className='px-4 py-1 font-normal'>Right Hold</th>
                                    <th className='px-4 py-1 font-normal'>Finger Position</th>
                                    <th className='px-4 py-1 font-normal'>Work</th>
                                    <th className='px-4 py-1 font-normal'>Rest</th>
                                    <th className='px-4 py-1 font-normal'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intervals.map((interval, i) => (
                                    <IntervalsRow
                                        key={i}
                                        intervalIndex={i}
                                        interval={interval}
                                        handleEditInterval={handleEditInterval}
                                        handleAddInterval={handleAddInterval}
                                        handleDeleteInterval={handleDeleteInterval}
                                        currentIntervalIndex={currentIntervalIndex}
                                    />
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
