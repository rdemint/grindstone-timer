function EdgeCol({ edgeMap, handleEdgeClick, currentEdge }) {
    return (
        <>
            <div className="flex flex-col space-y-4 w-full">
                {
                    edgeMap.map(
                        (row) => (
                            <div key={row[0]} className="flex space-x-1 h-10">
                                {row.map(
                                    (edge) => (
                                        <button key={edge} onClick={() => handleEdgeClick(edge)} className={`bg-slate-400 h-8 md:12 w-1/2 rounded-md ${currentEdge == edge ? 'bg-green-400 text-slate-800' : ''}`}>{edge}</button>
                                    ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}



export default function EdgeSelector({ edgeMap, leftHand, setLeftHand, rightHand, setRightHand }) {

    return (
        <section name="edge-selector" className="w-5/6">
            <div className="bg-slate-700 rounded-md pt-1 pb-2 px-2 mt-4 text-slate-50">
                <div className='flex space-x-1 mb-4'>
                    <button onClick={()=> setLeftHand('Jug')} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${leftHand === 'Jug' ? 'bg-green-400 text-slate-800' : '' }`}>Jug</button>
                    <button onClick={()=> setRightHand('Jug')} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${rightHand === 'Jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
                </div>
                <div className="flex space-x-4 items-center justify-center w-full">
                    <EdgeCol edgeMap={edgeMap} handleEdgeClick={setLeftHand} currentEdge={leftHand} />
                    <div className="flex space-x-1">
                        <button onClick={()=> setLeftHand('Slot')} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${leftHand === 'Slot' ? 'bg-green-400 text-slate-800' : ''}`}>Slot</button>
                        <button onClick={()=> setRightHand('Slot')} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${rightHand === 'Slot' ? 'bg-green-400 text-slate-800' : ''}`}>Slot</button>
                    </div>
                    <EdgeCol edgeMap={edgeMap} handleEdgeClick={setRightHand} currentEdge={rightHand} />
                </div>
            </div>
            <div className="flex justify-between space-x-4 p-4 text-slate-300">
                <div className="flex space-x-4">
                    <h3>Left:</h3>
                    <p>{leftHand}</p>
                </div>
                <div className="flex space-x-4">
                    <h3>Right:</h3>
                    <p>{rightHand}</p>
                </div>
            </div>
        </section>
    )
}