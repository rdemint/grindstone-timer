import { useState } from 'react'


function EdgeCol({ edgeMap, handleEdgeClick, currentEdge }) {
    return (
        <>
            <div className="bg-slate-600 flex flex-col space-y-4 w-48">
                {
                    edgeMap.map(
                        (row) => (
                            <div key={row[0]} className="flex space-x-1 h-10">
                                {row.map(
                                    (edge) => (
                                        <button key={edge} onClick={() => handleEdgeClick(edge)} className={`bg-slate-400 h-10 w-1/2 rounded-md ${currentEdge == edge ? 'bg-green-400 text-slate-800' : ''}`}>{edge}</button>
                                    ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}



export default function EdgeSelector({edgeMap, leftHand, setLeftHand, rightHand, setRightHand}) {




    return (
        <section name="edge-selector">
            <div className="bg-slate-700 rounded-md pt-8 pb-2 px-2 mt-4">
                <div className="flex space-x-4 items-center">
                    <EdgeCol edgeMap={edgeMap} handleEdgeClick={setLeftHand} currentEdge={leftHand} />
                    <div>
                        <button className="bg-slate-500 h-12 w-24 rounded-md">Slot</button>
                    </div>
                    <EdgeCol edgeMap={edgeMap} handleEdgeClick={setRightHand} currentEdge={rightHand} />
                </div>
            </div>
            <div className="flex justify-between space-x-4 p-8 text-slate-300">
                <div className="flex space-x-4">
                    <h3>Left hand</h3>
                    <p>{leftHand}mm</p>
                </div>
                <div className="flex space-x-4">
                    <h3>Right hand</h3>
                    <p>{rightHand}mm</p>
                </div>
            </div>
        </section>
    )
}