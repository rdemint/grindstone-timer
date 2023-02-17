import { IHangboard, IHold, IHand } from "./Timer";

export default function HangBoardHandHold({currentHand, hangboard, hold, handleSetHand, index}: {currentHand: IHand, hangboard:IHangboard, hold: IHold, handleSetHand: Function, index:number}) {
    return (
        <button 
        onClick={() => handleSetHand({...currentHand, hangboard, hold}, index)} 
        className={`bg-slate-500 text-slate-200 h-8 w-full rounded-md ${ hangboard?.name === currentHand?.hangboard?.name && hold?.name === currentHand?.hold?.name ? 'bg-green-400 text-slate-900' : ''}`}>{hold.name}</button>
    )
}