import { IHangboard, IHold, IHand } from "./Timer";

export default function HangBoardHandHold({currentHand, hangboard, hold, handleSetHand}: {currentHand: IHand, hangboard:IHangboard, hold: IHold, handleSetHand: Function}) {
    return (
        <button onClick={() => handleSetHand({...currentHand, hangboard, hold})} className={`bg-slate-400 h-8 w-full rounded-md ${ hangboard.name === currentHand.hangboard.name && hold.name === currentHand.hold.name ? 'bg-green-400 text-slate-800' : ''}`}>{hold.name}</button>
    )
}