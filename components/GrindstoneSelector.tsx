import { useState } from 'react';
import HangBoardHandHold from "./HangboardHandHold";
import { grindstone } from "../lib/hangboards";
import { IHand } from "./Timer";


export default function GrindstoneSelector({ currentLeftHand, handleLeftHand, currentRightHand, handleRightHand, index: currentIndex }: { currentLeftHand: IHand, handleLeftHand: Function, currentRightHand: IHand, handleRightHand: Function, index:number }) {
    const [jug] = useState(grindstone.holds.find((el) => el.name === 'jug'));
    const [slot] = useState(grindstone.holds.find((el)=> el.name === 'slot'));
    return (
        <section id="edge-selector" className="grow">
            <div className="bg-slate-900 rounded-md mx-2 text-slate-50">
                <div className='flex space-x-1 mb-2 w-full'>
                    <button 
                    onClick={() => handleLeftHand({ ...currentLeftHand, hangboard: grindstone, hold: jug }, currentIndex)} 
                    className={`grow border border-slate-600 text-slate-200 h-8 px-2 rounded-md ${currentLeftHand?.hangboard?.name === grindstone.name && currentLeftHand?.hold?.name === jug.name ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : 'text-slate-300'}`}>Jug</button>
                    <button 
                    onClick={() => handleRightHand({ ...currentRightHand, hangboard: grindstone, hold: jug }, currentIndex)} 
                    className={`grow border border-slate-600 h-8 px-2 rounded-md ${currentRightHand?.hangboard?.name === grindstone.name && currentRightHand?.hold?.name === jug.name ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : 'text-slate-300'}`}>Jug</button>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="flex space-x-1">
                            <HangBoardHandHold currentHand={currentLeftHand} hangboard={grindstone} handleSetHand={handleLeftHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '10')} />
                            <HangBoardHandHold currentHand={currentLeftHand} hangboard={grindstone} handleSetHand={handleLeftHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '8')} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold currentHand={currentLeftHand} hangboard={grindstone} handleSetHand={handleLeftHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '30')} />
                            <HangBoardHandHold currentHand={currentLeftHand} hangboard={grindstone} handleSetHand={handleLeftHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '25')} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold currentHand={currentLeftHand} hangboard={grindstone} handleSetHand={handleLeftHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '20')} />
                            <HangBoardHandHold currentHand={currentLeftHand} hangboard={grindstone} handleSetHand={handleLeftHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '15')} />
                        </div>
                    </div>
                    <div className="flex sm:w-96">
                        <button 
                        onClick={() => handleLeftHand({...currentLeftHand, hangboard:grindstone, hold: slot}, currentIndex)} 
                        className={`grow border border-slate-600 text-slate-200 h-8 px-2 ml-2 ${currentLeftHand?.hangboard?.name === grindstone.name && currentLeftHand?.hold?.name === slot.name ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : 'text-slate-300'}`}
                        >L</button>
                        <button 
                        onClick={() => handleRightHand({...currentRightHand, hangboard:grindstone, hold: slot}, currentIndex)} 
                        className={`grow border border-slate-600 border border-slate-600 text-slate-200 h-8 px-2  mr-2 ${currentRightHand?.hangboard?.name === grindstone.name && currentRightHand?.hold?.name === slot.name ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : 'text-slate-300'}`}
                        >R</button>
                    </div>
                    <div className="flex flex-col space-y-4 w-full">
                    <div className="flex space-x-1">
                            <HangBoardHandHold currentHand={currentRightHand} hangboard={grindstone} handleSetHand={handleRightHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '10')} />
                            <HangBoardHandHold currentHand={currentRightHand} hangboard={grindstone} handleSetHand={handleRightHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '8')} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold currentHand={currentRightHand} hangboard={grindstone} handleSetHand={handleRightHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '30')} />
                            <HangBoardHandHold currentHand={currentRightHand} hangboard={grindstone} handleSetHand={handleRightHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '25')} />
                        </div>
                        <div className="flex space-x-1">
                            <HangBoardHandHold currentHand={currentRightHand} hangboard={grindstone} handleSetHand={handleRightHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '20')} />
                            <HangBoardHandHold currentHand={currentRightHand} hangboard={grindstone} handleSetHand={handleRightHand} index={currentIndex} hold={grindstone.holds.find((el) => el.name === '15')} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}