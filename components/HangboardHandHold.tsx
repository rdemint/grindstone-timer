import { IHangboard, IHold, IHand } from "./Timer";

export default function HangBoardHandHold({currentHand, hangboard, hold, handleSetHand, index}: {currentHand: IHand, hangboard:IHangboard, hold: IHold, handleSetHand: Function, index:number}) {
    return (
        <button 
        onClick={() => handleSetHand({...currentHand, hangboard, hold}, index)} 
        className={`border border-slate-600 text-slate-300 h-8 w-full rounded-md ${ hangboard?.name === currentHand?.hangboard?.name && hold?.name === currentHand?.hold?.name ? 'shadow shadow-sky-500 border border-sky-600 text-sky-300' : ''}`}>{hold.name}</button>
    )
}