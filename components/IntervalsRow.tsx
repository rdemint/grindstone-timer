import {useState} from 'react';
import { fingerPositions } from '../lib/fingerpositions';
import { IFingerPosition, IHold, Action, IInterval, IHand, IHangboard } from "./Timer";
import { grindstone, hangboards } from "../lib/hangboards";

export default function IntervalsRow({ interval, intervalIndex, handleEditInterval}: {interval:IInterval, intervalIndex:number, handleEditInterval:Function}) {
    const [workInterval, setWorkInterval] = useState(interval.workInterval);
    const [restInterval, setRestInterval] = useState(interval.restInterval);
    const [leftHand, setLeftHand] = useState<IHand>(interval.leftHand);
    const [rightHand, setRightHand] = useState<IHand>(interval.rightHand);
    const [action, setAction] = useState<Action>({kind: 'hang', title: 'Hang'})
    const [reps, setReps] = useState<number>(1);

    const handleLeftFingerPosition = (name) => {
       let position = fingerPositions.find((el)=> el.name === name);
       interval = {
        ...interval,
        leftHand: {
            ...leftHand,
            fingerPosition: position
        }
       }
        handleEditInterval(intervalIndex, interval);
    };

    const handleRightFingerPosition = (name) => {
        let position = fingerPositions.find((el)=> el.name === name);
       interval = {
        ...interval,
        rightHand: {
            ...rightHand,
            fingerPosition: position
        }
       }
        handleEditInterval(intervalIndex, interval);
    };


    function handleHandString(holdString:string): [IHangboard, IHold] {
        const result: Array<String> = holdString.split("-");
        const hangboard: IHangboard = hangboards.find(
            (hangboard) => hangboard.name === result[0]
        );
        const hold: IHold = hangboard.holds.find((hold) => hold.name === result[1]);
        return [hangboard, hold];
    }

    function handleLeftHand(name, index) {
        const [hangboard, hold] = handleHandString(name);
        interval = {
            ...interval,
            leftHand: {
                ...leftHand,
                hangboard,
                hold
            }
        };
        handleEditInterval(index, interval);
    }

    function handleRightHand(name, index) {
        const [hangboard, hold] = handleHandString(name);
        interval = {
            ...interval,
            rightHand: {
                ...rightHand,
                hangboard,
                hold
            }
        };
        handleEditInterval(index, interval);

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
                {interval.leftHand.hangboard.title}  
            </td>
            <td className='px-4 py-1'>
                {interval.leftHand.hold.title}
            </td>
            <td className='px-4 py-1'>
                {interval.leftHand.fingerPosition.title}
                </td>
            <td className='px-4 py-1'>
                {interval.rightHand.hangboard.title}
                </td>
            <td className='px-4 py-1'>
                {interval.rightHand.hold.title}
                </td>
            <td className='px-4 py-1'>
                {interval.rightHand.fingerPosition.title}
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