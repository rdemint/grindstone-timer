import {useState} from 'react';
import HangBoardHandHold from './HangboardHandHold';
import { simpleboard } from '../lib/hangboards';
import { IHand } from './Timer';

export default function SimpleboardSelector({ currentHand, setHand}: {currentHand: IHand, setHand: Function}) {
    const [jug] = useState(simpleboard.holds.find((el)=> el.name==='jug'));
    return (
        <div className='flex flex-col bg-slate-700 text-slate-50 md:w-24 rounded'>
            <button onClick={() => setHand({...currentHand, hangboard: simpleboard, hold: jug})} className={`bg-slate-400 h-8 px-2 rounded-md ${currentHand?.hangboard?.name === simpleboard.name && currentHand?.hold?.name === 'jug' ? 'bg-green-400 text-slate-800' : ''}`}>Jug</button>
            <div className="flex flex-col space-y-2 mt-2 w-full">
                <div className="flex flex-col space-y-4 h-8">
                    <HangBoardHandHold hangboard={simpleboard} hold={simpleboard.holds.find((el)=> el.name === '10')} currentHand={currentHand} handleSetHand={setHand} />
                    <HangBoardHandHold hangboard={simpleboard} hold={simpleboard.holds.find((el)=> el.name === '8')} currentHand={currentHand}  handleSetHand={setHand} />
                    <HangBoardHandHold hangboard={simpleboard} hold={simpleboard.holds.find((el)=> el.name === '6')} currentHand={currentHand}  handleSetHand={setHand} />
                </div>
            </div>
        </div>
    )
}