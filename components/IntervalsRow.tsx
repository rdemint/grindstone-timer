import { useState, useEffect } from 'react';
import { fingerPositions } from '../lib/fingerpositions';
import { IFingerPosition, IHold, Action, IInterval, IHand, IHangboard } from "./Timer";
import { grindstone, hangboards } from "../lib/hangboards";

export default function IntervalsRow({ interval, intervalIndex, handleEditInterval }: { interval: IInterval, intervalIndex: number, handleEditInterval: Function }) {


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
        interval = {
            ...interval,
            leftHand: {
                ...interval.leftHand,
                fingerPosition: position
            }
        }
        handleEditInterval(interval, intervalIndex);
    };

    const handleRightFingerPosition = (name) => {
        let position = fingerPositions.find((el) => el.name === name);
        
        let newInterval = {
            ...interval,
            rightHand: {
                ...interval.rightHand,
                fingerPosition: position
            }
        }
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
        interval = {
            ...interval,
            leftHand: {
                ...interval.leftHand,
                hangboard,
                hold
            }
        };
        handleEditInterval(interval, intervalIndex);
    }

    function handleRightHand(name) {
        const [hangboard, hold] = handleHandString(name);
        interval = {
            ...interval,
            rightHand: {
                ...interval.rightHand,
                hangboard,
                hold
            }
        };
        handleEditInterval(interval, intervalIndex);

    }

    function handleRestInterval(restInterval) {
        interval = {
            ...interval,
            restInterval
        }
        handleEditInterval(interval, intervalIndex);
    }

    function handleWorkInterval(workInterval) {
        interval = {
            ...interval,
            workInterval,
        }
        handleEditInterval(interval, intervalIndex);
    }

    function handleAction(name) {
        switch (name) {
            case "pullup":
                let newInterval = {
                    ...interval,
                    action: {
                        kind: 'pullup',
                        title: 'Pullup',
                        reps: reps
                    }
                }
                handleEditInterval(newInterval, intervalIndex);
                break;
            case "leglift":
                interval = {
                    ...interval,
                    action: {
                        kind: 'leglift',
                        title: 'Leg lift',
                        reps: reps,
                    }
                }
                handleEditInterval(interval, intervalIndex);
                break;
            case "hang":
                interval = {
                    ...interval,
                    action: {
                        kind: 'hang',
                        title: 'Hang'
                    }
                };
                handleEditInterval(interval, intervalIndex);
                break;
        }
    }

    function handleReps(numReps) {
        if (interval.action.kind !== 'hang') {
            setReps(numReps);
            interval = {
                ...interval,
                action: {
                    ...interval.action,
                    reps: numReps
                }
            }
            handleEditInterval(interval, intervalIndex);
        }
    }

    return (
        <tr className="text-left text-slate-300">
            <td className='px-4 py-1 rounded'>
                <select
                    className="bg-slate-700 text-slate-50 w-48 rounded px-1"
                    onChange={(e) => handleLeftHand(e.target.value)}
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
                    className="bg-slate-700 text-slate-50 w-24 px-1 rounded"
                    value={interval.leftHand.fingerPosition.name}
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
                    className="bg-slate-700 text-slate-100 w-48 rounded"
                    onChange={(e) => handleRightHand(e.target.value)}
                >
                    {hangboards.map((hangboard) =>
                        hangboard.holds.map((hold) => (
                            <option
                                className="text-slate-100"
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
                    className="bg-slate-700 text-slate-100 w-24 px-1 rounded"
                    value={interval.rightHand.fingerPosition.name}
                    onChange={(e) => {
                        handleRightFingerPosition(e.target.value);
                    }}
                >
                    {fingerPositions.map((fingerposition) => (
                        <option
                            className="text-slate-600"
                            key={fingerposition.name}
                            value={fingerposition.name}>
                            {fingerposition.title}
                        </option>
                    ))}
                </select>
            </td>
            <td className='px-1 py-1'>
                <input
                    className="rounded bg-slate-700 text-slate-100 w-12 text-center"
                    type="number"
                    placeholder={interval.workInterval.toString()}
                    onChange={(e) => handleWorkInterval(e.target.valueAsNumber)}
                />
            </td>
            <td className='px-1 py-1'>
                <input
                    className="rounded px-1 bg-slate-700 text-slate-100 w-12 text-center"
                    type="number"
                    placeholder={interval.restInterval.toString()}
                    onChange={(e) => handleRestInterval(e.target.valueAsNumber)}
                />
            </td>
            <td className='px-1 py-1'>
                <select
                    className="bg-slate-700 text-slate-100 rounded w-full text-center"
                    onChange={(e) => handleAction(e.target.value)}
                >
                    <option value="hang">Hang</option>
                    <option value="pullup">Pullup</option>
                    <option value="leglift">Lift</option>
                </select>
            </td>

            {interval.action.kind === "pullup" || interval.action.kind === "leglift" ? (
                <td>
                    <div className="flex justify-between">
                        <input
                            className="bg-slate-700 text-slate-100 w-12 rounded px-1 text-center"
                            type="number"
                            onChange={(e) => handleReps(e.target.valueAsNumber)}
                            placeholder={Number(1).toString()}
                        />
                    </div>
                </td>
            ) : (
                <td>
                    <div className="w-full"></div>
                </td>
            )}
        </tr>
    )
}