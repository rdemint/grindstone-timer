import HangBoardHandHold from "./HangboardHandHold"


export default function GrindstoneSelector({ hangboard, leftHandHold, setLeftHandHold, rightHandHold, setRightHandHold }) {

    return (
        <section id="edge-selector" className="grow">
            <div className="bg-slate-700 rounded-md mx-1 text-slate-50">
                <div className='flex space-x-1 mb-2 w-full'>
                    <button onClick={() => setLeftHandHold({ hangboardName: hangboard.name, name: 'jug', title: 'Jug' })} className={`grow bg-slate-400 h-8 px-2 rounded-md ${leftHandHold.hangboardName === hangboard.name && leftHandHold.name === 'jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
                    <button onClick={() => setRightHandHold({ hangboardName: hangboard.name, name: 'jug', title: 'Jug' })} className={`grow bg-slate-400 h-8 px-2 rounded-md ${rightHandHold.hangboardName === hangboard.name && rightHandHold.name === 'jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="flex space-x-1">
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '10')} currentHangboardHandHold={leftHandHold} handleEdgeClick={setLeftHandHold} />
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name}handHold={hangboard.handHolds.find((el) => el.name === '8')} currentHangboardHandHold={leftHandHold} handleEdgeClick={setLeftHandHold} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '30')} currentHangboardHandHold={leftHandHold} handleEdgeClick={setLeftHandHold} />
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '25')} currentHangboardHandHold={leftHandHold} handleEdgeClick={setLeftHandHold} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '20')} currentHangboardHandHold={leftHandHold} handleEdgeClick={setLeftHandHold} />
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '15')} currentHangboardHandHold={leftHandHold} handleEdgeClick={setLeftHandHold} />
                        </div>
                    </div>
                    <div className="flex sm:w-96">
                        <button onClick={() => setLeftHandHold({hangboardTitle: hangboard.title, hangboardName: hangboard.name, name: 'slot', title: 'Slot'})} className={`grow bg-slate-400 h-8 px-2 rounded ml-1 ${leftHandHold.hangboardName === hangboard.name && leftHandHold.name === 'slot' ? 'bg-green-400 text-slate-800' : ''}`}>L</button>
                        <button onClick={() => setRightHandHold({hangboardTitle: hangboard.title, hangboardName: hangboard.name, name: 'slot', title: 'Slot'})} className={`grow bg-slate-400 h-8 px-2 rounded mr-1 ${rightHandHold.hangboardName === hangboard.name && rightHandHold.name === 'slot' ? 'bg-green-400 text-slate-800' : ''}`}>R</button>
                    </div>
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="flex space-x-1">
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '10')} currentHangboardHandHold={rightHandHold} handleEdgeClick={setRightHandHold} />
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '8')} currentHangboardHandHold={rightHandHold} handleEdgeClick={setRightHandHold} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '30')} currentHangboardHandHold={rightHandHold} handleEdgeClick={setRightHandHold} />
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name}handHold={hangboard.handHolds.find((el) => el.name === '25')} currentHangboardHandHold={rightHandHold} handleEdgeClick={setRightHandHold} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '20')} currentHangboardHandHold={rightHandHold} handleEdgeClick={setRightHandHold} />
                            <HangBoardHandHold hangboardTitle={hangboard.title} hangboardName={hangboard.name} handHold={hangboard.handHolds.find((el) => el.name === '15')} currentHangboardHandHold={rightHandHold} handleEdgeClick={setRightHandHold} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}