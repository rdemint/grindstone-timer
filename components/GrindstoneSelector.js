function EdgeCol({ hangboard, handleEdgeClick, handHold }) {
    return (
        <>
            <div className="flex flex-col space-y-4 w-full">
                {
                    hangboard.edgeMap.map(
                        (row) => (
                            <div key={row[0]} className="flex space-x-1 h-10">
                                {row.map(
                                    (edge) => (
                                        <button key={edge} onClick={() => handleEdgeClick({hangboard, edge})} className={`bg-slate-400 h-8 md:12 w-1/2 rounded-md ${handHold.edge == edge && handHold.hangboard === hangboard ? 'bg-green-400 text-slate-800' : ''}`}>{edge}</button>
                                    ))}
                            </div>
                        ))
                }
            </div>
        </>
    )
}



export default function GrindstoneSelector({ hangboard, leftHand, setLeftHand, rightHand, setRightHand }) {

    return (
        <section name="edge-selector" className="w-5/6">
            <div className="bg-slate-700 rounded-md pt-1 pb-2 px-2 mt-4 text-slate-50">
                <div className='flex space-x-1 mb-4'>
                    <button onClick={()=> setLeftHand({hangboard: hangboard, edge: 'Jug'})} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${leftHand.edge === 'Jug' ? 'bg-green-400 text-slate-800' : '' }`}>Jug</button>
                    <button onClick={()=> setRightHand({hangboard: hangboard, edge: 'Jug'})} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${rightHand.edge === 'Jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
                </div>
                <div className="flex space-x-4 items-center justify-center w-full">
                    <EdgeCol hangboard={hangboard} handleEdgeClick={setLeftHand} handHold={leftHand} />
                    <div className="flex space-x-1">
                        <button onClick={()=> setLeftHand({hangboard: hangboard, edge: 'Slot'})} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${leftHand.edge === 'Slot' ? 'bg-green-400 text-slate-800' : ''}`}>Slot</button>
                        <button onClick={()=> setRightHand({hangboard: hangboard, edge: 'Slot'})} className={`bg-slate-400 h-8 w-1/2 px-2 rounded-md ${rightHand.edge === 'Slot' ? 'bg-green-400 text-slate-800' : ''}`}>Slot</button>
                    </div>
                    <EdgeCol hangboard={hangboard} handleEdgeClick={setRightHand} handHold={rightHand} />
                </div>
            </div>
            <div className="flex justify-between space-x-4 p-4 text-slate-300">
                <div className="flex space-x-4">
                    <h3>Left:</h3>
                    <p>{leftHand.edge}</p>
                </div>
                <div className="flex space-x-4">
                    <h3>Right:</h3>
                    <p>{rightHand.edge}</p>
                </div>
            </div>
        </section>
    )
}