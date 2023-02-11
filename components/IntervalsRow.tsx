import {useState} from 'react';
import { fingerPositions } from '../lib/fingerpositions';
import { IHangboardHandHold, IFingerPosition, Action } from "./Timer";
import { grindstone, hangboards } from "../lib/hangboards";

export default function IntervalsRow({ interval, intervalIndex, handleEditInterval}) {
    const [workInterval, setWorkInterval] = useState(interval.workInterval);
    const [restInterval, setRestInterval] = useState(interval.restInterval);
    const [leftHand, setLeftHand] = useState<IHangboardHandHold>(interval.leftHold);
    const [leftFingerPosition, setLeftFingerPosition] = useState<IFingerPosition>(interval.leftFingerPosition);
    const [rightHand, setRightHand] = useState<IHangboardHandHold>(interval.rightHold);
    const [rightFingerPosition, setRightFingerPosition] = useState<IFingerPosition>(interval.rightFingerPosition);
    const [action, setAction] = useState<Action>({kind: 'hang', title: 'Hang'})
    const [reps, setReps] = useState<number>(1);

    //how to populate the state back up to the 
    //create handle function if any state changes, update the interval
    const handleLeftFingerPosition = (name) => {
        handleFingerPosition(name, setLeftFingerPosition);
        interval = {
            ...interval,
            leftFingerPosition
        };
        handleEditInterval(intervalIndex, interval);
    };

    const handleRightFingerPosition = (name) => {
        handleFingerPosition(name, setRightFingerPosition);
        interval = {
            ...interval,
            rightFingerPosition
        };
        handleEditInterval(intervalIndex, interval);
    };

    const handleFingerPosition = (name, setFingerPosition) => {
        const position = fingerPositions.find((pos) => pos.name === name);
        setFingerPosition(position);
    }

    function handleLeftHand(name) {
        handleHand(setLeftHand, name);
    }

    function handleRightHand(name) {
        handleHand(setRightHand, name);
    }


    function handleHand(setHand, holdName) {
        const result: Array<String> = holdName.split("-");
        const hangboard = hangboards.find(
            (hangboard) => hangboard.name === result[0]
        );
        const hold = hangboard.handHolds.find((hold) => hold.name === result[1]);
        setHand({
            name: hold.name,
            title: hold.title,
            hangboardName: hangboard.name,
            hangboardTitle: hangboard.title,
        });
        interval = {
            ...interval,
            leftHand,
            rightHand,
        }
    }
    function handleAction(name) {
        switch (name) {
            case "pullup":
                setAction({ kind: "pullup", title: "Pullup", reps: reps });
                break;
            case "leglift":
                setAction({ kind: "leglift", reps: reps, title: "Leg lift" });
                break;
            case "hang":
                setAction({ kind: "hang", title: "Hang" });
                break;
        }
    }

    return (
        <tr className="text-left text-slate-300">
            <td className='px-4 py-1'>
                {interval.leftHold.hangboardTitle}  
            </td>
            <td className='px-4 py-1'>
                {interval.leftHold.title}
            </td>
            <td className='px-4 py-1'>
                {interval.leftFingerPosition.title}
                </td>
            <td className='px-4 py-1'>
                {interval.rightHold.hangboardTitle}
                </td>
            <td className='px-4 py-1'>
                {interval.rightHold.title}
                </td>
            <td className='px-4 py-1'>
                {interval.rightFingerPosition.title}
                </td>
            <td className='px-4 py-1'>
                {interval.workInterval}
                </td>
            <td className='px-4 py-1'>
                {interval.restInterval}
                </td>
            {interval.action.kind === "pullup" && <td className='px-4 py-1 text-justify'>{interval.action.reps} {interval.action.kind}</td>}
            {interval.action.kind === 'hang' && <td className='px-4 py-1 text-justify'> {interval.action.kind}</td>}
            {interval.action.kind === 'leglift' && <td className='px-4 py-1 text-justify'>{interval.action.reps} {interval.action.kind}</td>}
            <td className='px-4 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>

            </td>
        </tr>
    )
}