import useState from 'react'

export default function SimpleboardSelector({ hangboard, handHold, handleEdgeClick }) {

    return (
        <div className='flex flex-col bg-slate-700 text-slate-50 md:w-24 rounded'>
            <button onClick={() => handleEdgeClick({ hangboard: hangboard, edge: 'Jug' })} className={`bg-slate-400 h-8 px-2 rounded-md ${hangboard.name === handHold.hangboard.name && handHold.edge === 'Jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
            <div className="flex flex-col space-y-2 mt-2 w-full">
                {
                    hangboard.edgeMap.map(
                        (row) => (
                            <div key={row[0]} className="flex space-x-1 h-8">
                                {row.map(
                                    (edge) => (
                                        <button key={edge} onClick={() => handleEdgeClick({ hangboard, edge })} className={`bg-slate-400 h-8 w-full rounded-md ${handHold.edge == edge && handHold.hangboard.name === hangboard.name ? 'bg-green-400 text-slate-800' : ''}`}>{edge}</button>
                                    ))}
                            </div>
                        ))
                }
            </div>
        </div>
    )
}