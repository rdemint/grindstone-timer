import useState from 'react'
import HangBoardHandHold from './HangboardHandHold'

export default function SimpleboardSelector({ hangboard, currentHandHold, handleEdgeClick }) {

    return (
        <div className='flex flex-col bg-slate-700 text-slate-50 md:w-24 rounded'>
            <button onClick={() => handleEdgeClick({hangboardName: hangboard.name, name: 'jug', title: 'Jug'})} className={`bg-slate-400 h-8 px-2 rounded-md ${currentHandHold.hangboardName == hangboard.name && currentHandHold.name === 'jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
            <div className="flex flex-col space-y-2 mt-2 w-full">
                <div className="flex flex-col space-y-4 h-8">
                    <HangBoardHandHold hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el)=> el.name === '10')} currentHangboardHandHold={currentHandHold} handleEdgeClick={handleEdgeClick} />
                    <HangBoardHandHold hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el)=> el.name === '8')} currentHangboardHandHold={currentHandHold} handleEdgeClick={handleEdgeClick} />
                    <HangBoardHandHold hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el)=> el.name === '6')} currentHangboardHandHold={currentHandHold} handleEdgeClick={handleEdgeClick} />
                </div>
            </div>
        </div>
    )
}