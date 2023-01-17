export default function HangBoardHandHold({hangboardName, hangboardTitle, currentHangboardHandHold, handHold, handleEdgeClick}) {
    return (
        <button onClick={() => handleEdgeClick({...handHold, hangboardName, hangboardTitle})} className={`bg-slate-400 h-8 w-full rounded-md ${ currentHangboardHandHold.name === handHold.name && currentHangboardHandHold.hangboardName === hangboardName ? 'bg-green-400 text-slate-800' : ''}`}>{handHold.name}</button>
    )
}