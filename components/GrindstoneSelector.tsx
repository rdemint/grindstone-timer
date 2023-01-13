function EdgeCol({ hangboard, handleEdgeClick, handHold }) {
    return (
        <>
            <div className="flex flex-col space-y-4 w-full">
                {
                    hangboard.edgeMap.map(
                        (row) => (
                            <div key={row[0]} className="flex space-x-1 h-8">
                                {row.map(
                                    (edge) => (
                                        <button key={edge} onClick={() => handleEdgeClick({hangboard, edge})} className={`bg-slate-400 h-8 w-full rounded-md ${handHold.edge == edge && handHold.hangboard.name === hangboard.name ? 'bg-green-400 text-slate-800' : ''}`}>{edge}</button>
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
        <section id="edge-selector" className="grow">
            <div className="bg-slate-700 rounded-md mx-1 text-slate-50">
                <div className='flex space-x-1 mb-2 w-full'>
                    <button onClick={()=> setLeftHand({hangboard: hangboard, edge: 'Jug'})} className={`grow bg-slate-400 h-8 px-2 rounded-md ${leftHand.hangboard.name === hangboard.name && leftHand.edge === 'Jug' ? 'bg-green-400 text-slate-800' : '' }`}>Jug</button>
                    <button onClick={()=> setRightHand({hangboard: hangboard, edge: 'Jug'})} className={`grow bg-slate-400 h-8 px-2 rounded-md ${rightHand.hangboard.name === hangboard.name && rightHand.edge === 'Jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
                </div>
                <div className="flex items-center justify-center w-full">
                    <EdgeCol hangboard={hangboard} handleEdgeClick={setLeftHand} handHold={leftHand} />
                    <div className="flex sm:w-96">
                        <button onClick={()=> setLeftHand({hangboard: hangboard, edge: 'Slot'})} className={`grow bg-slate-400 h-8 px-2 rounded ml-1 ${leftHand.hangboard.name === hangboard.name && leftHand.edge === 'Slot' ? 'bg-green-400 text-slate-800' : ''}`}>L</button>
                        <button onClick={()=> setRightHand({hangboard: hangboard, edge: 'Slot'})} className={`grow bg-slate-400 h-8 px-2 rounded mr-1 ${rightHand.hangboard.name === hangboard.name && rightHand.edge === 'Slot' ? 'bg-green-400 text-slate-800' : ''}`}>R</button>
                    </div>
                    <EdgeCol hangboard={hangboard} handleEdgeClick={setRightHand} handHold={rightHand} />
                </div>
            </div>
 
        </section>
    )
}