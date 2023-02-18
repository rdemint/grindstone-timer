import { useState, useEffect } from 'react';
import { fingerPositions } from '../lib/fingerpositions';
import { IFingerPosition, IHold, Action, IInterval, IHand, IHangboard } from "./Timer";
import { grindstone, hangboards } from "../lib/hangboards";
import produce from 'immer';

export default function IntervalsRow({ interval, intervalIndex, handleEditInterval, handleAddInterval, handleDeleteInterval }: { interval: IInterval, intervalIndex: number, handleEditInterval: Function, handleAddInterval: Function, handleDeleteInterval: Function }) {


    const [reps, setReps] = useState<number>();

    useEffect(() => {
        if (interval.action.kind != "hang") {
            setReps(interval.action.reps);
        }
        else {
            setReps(1);
        }
    }, []);

    const handleLeftFingerPosition = (name) => {
        let position = fingerPositions.find((el) => el.name === name);
        const newInterval = produce(
            interval,
            draftInterval => {
                draftInterval.leftHand.fingerPosition = position;
            }
        )
        handleEditInterval(newInterval, intervalIndex);
    };

    const handleRightFingerPosition = (name) => {
        let position = fingerPositions.find((el) => el.name === name);
        const newInterval = produce(
            interval,
            draftInterval => {
                draftInterval.rightHand.fingerPosition = position;
            }
        )
        handleEditInterval(newInterval, intervalIndex);
    };


    function handleHandString(holdString: string): [IHangboard, IHold] {
        const result: Array<String> = holdString.split("-");
        const hangboard: IHangboard = hangboards.find(
            (hangboard) => hangboard.name === result[0]
        );
        const hold: IHold = hangboard.holds.find((hold) => hold.name === result[1]);
        return [hangboard, hold];
    }

    function handleLeftHand(name) {
        const [hangboard, hold] = handleHandString(name);
        const newInterval = produce(
            interval,
            draftInterval => {
                draftInterval.leftHand.hangboard = hangboard;
                draftInterval.leftHand.hold = hold;
            }
        )
        handleEditInterval(newInterval, intervalIndex);
    }

    function handleRightHand(name) {
        const [hangboard, hold] = handleHandString(name);
        const newInterval = produce(
            interval,
            draftInterval => {
                draftInterval.rightHand.hangboard = hangboard;
                draftInterval.rightHand.hold = hold;
            }
        )
        handleEditInterval(newInterval, intervalIndex);

    }

    function handleRestInterval(restInterval) {
        const newInterval = produce(
            interval,
            draftInterval => {
                draftInterval.restInterval = restInterval;
            }
        );
        handleEditInterval(newInterval, intervalIndex);
    }

    function handleWorkInterval(workInterval) {
        const newInterval = produce(
            interval,
            draftInterval => {
                draftInterval.restInterval = workInterval;
            }
        );
        handleEditInterval(newInterval, intervalIndex);
    }

    function handleAction(name) {
        let newInterval: IInterval;
        switch (name) {
            case "pullup":
                newInterval = produce(
                    interval,
                    draftInterval => {
                        draftInterval.action = { kind: 'pullup', title: 'Pullup', reps: reps }
                    }
                );
                handleEditInterval(newInterval, intervalIndex);
                break;
            case "leglift":
                newInterval = produce(
                    interval,
                    draftInterval => {
                        draftInterval.action = {
                            kind: 'leglift',
                            title: 'Leg lift',
                            reps: reps,
                        }
                    }
                )
                handleEditInterval(newInterval, intervalIndex);
                break;
            case "hang":
                newInterval = produce(
                    interval,
                    draftInterval => {
                        draftInterval.action = {
                            kind: 'hang',
                            title: 'Hang'
                        }
                    }
                )
                handleEditInterval(newInterval, intervalIndex);
                break;
        }
    }

    function handleReps(numReps: number) {
        if (interval.action.kind != 'hang') {
            setReps(numReps)
            let newAction = { ...interval.action, reps: numReps };
            const newInterval = produce(
                interval,
                draftInterval => {
                    draftInterval.action = newAction;
                }
            )
            handleEditInterval(newInterval, intervalIndex);
        }
    }

    return (
        <tr className="text-left text-slate-300 text-sm w-full">
            <td className='py-2 rounded'>
                <select
                    className="bg-slate-800 rounded px-1"
                    onChange={(e) => handleLeftHand(e.target.value)}
                    value={`${interval?.leftHand?.hangboard?.name}-${interval?.leftHand?.hold?.name}`}
                >
                    {hangboards.map((hangboard) =>
                        hangboard.holds.map((hold) => (
                            <option
                                className="px-1"
                                key={`${hangboard.name}-${hold.name}`}
                                value={`${hangboard.name}-${hold.name}`}
                            >
                                {hangboard.title} {hold.title}
                            </option>
                        ))
                    )}
                </select>
            </td>
            <td className='px-4 py-1'>
                <select
                    className="bg-slate-800  px-1 rounded"
                    value={interval?.leftHand?.fingerPosition?.name}
                    onChange={(e) => {
                        handleLeftFingerPosition(e.target.value);
                    }}
                >
                    {fingerPositions.map((fingerposition) => (
                        <option
                            key={fingerposition.name}
                            className=""
                            value={fingerposition.name}
                        >
                            {fingerposition.title}
                        </option>
                    ))}
                </select>
            </td>
            <td className='px-4 py-1'>
                <select
                    className="bg-slate-800 rounded"
                    onChange={(e) => handleRightHand(e.target.value)}
                    value={`${interval?.rightHand?.hangboard?.name}-${interval?.rightHand?.hold?.name}`}
                >
                    {hangboards.map((hangboard) =>
                        hangboard.holds.map((hold) => (
                            <option
                                className=""
                                key={`${hangboard.name}-${hold.name}`}
                                value={`${hangboard.name}-${hold.name}`}
                            >
                                {hangboard.title} {hold.title}
                            </option>
                        ))
                    )}
                </select>
            </td>
            <td className='px-4 py-1'>
                <select
                    className="bg-slate-800 px-1 rounded"
                    value={interval?.rightHand?.fingerPosition?.name}
                    onChange={(e) => {
                        handleRightFingerPosition(e.target.value);
                    }}
                >
                    {fingerPositions.map((fingerposition) => (
                        <option
                            className=""
                            key={fingerposition.name}
                            value={fingerposition.name}>
                            {fingerposition.title}
                        </option>
                    ))}
                </select>
            </td>
            <td className='py-1'>
                <input
                    className="rounded bg-slate-800 w-12 text-center"
                    type="number"
                    placeholder={interval.workInterval.toString()}
                    onChange={(e) => handleWorkInterval(e.target.valueAsNumber)}
                    min="1"
                />
            </td>
            <td className='px-1 py-1'>
                <input
                    className="rounded px-1 bg-slate-800 w-12 text-center"
                    type="number"
                    placeholder={interval.restInterval.toString()}
                    onChange={(e) => handleRestInterval(e.target.valueAsNumber)}
                    min="1"
                />
            </td>
            <td className='px-1 py-1'>
                <select
                    className="bg-slate-800 rounded w-16 text-center"
                    onChange={(e) => handleAction(e.target.value)}
                    value={interval.action.kind}
                >
                    <option value="hang">Hang</option>
                    <option value="pullup">Pullup</option>
                    <option value="leglift">Lift</option>
                </select>
            </td>
            {interval.action.kind === "pullup" || interval.action.kind === "leglift" ? (
                <td>
                    <div className="">
                        <input
                            className="bg-slate-800 w-12 rounded text-center"
                            type="number"
                            onChange={(e) => handleReps(e.target.valueAsNumber)}
                            placeholder={Number(1).toString()}
                            min={1}
                        />
                    </div>
                </td>
            ) : (
                <td>
                    <div className="w-12"></div>
                </td>
            )}
            <td className='px-1 py-1 text-slate-400' title='Duplicate interval and add below'>
                <button onClick={() => handleAddInterval(interval, intervalIndex)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </button>
            </td>
            <td className='px-1 py-1 text-slate-400' title='Delete interval'>
                <button onClick={() => handleDeleteInterval(interval, intervalIndex)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button>
            </td>
        </tr>
    )
}