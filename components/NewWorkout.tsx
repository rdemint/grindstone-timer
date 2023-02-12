import React from "react";
import { useState } from "react";
import {
    IInterval,
    IHangboard,
    IHold,
    Action,
    IHand,
} from "./Timer";
import { fingerPositions } from "../lib/fingerpositions";
import { hangboards } from "../lib/hangboards";
import IntervalsTable from "./IntervalsTable";

export default function NewWorkout() {
    const [intervals, setIntervals] = useState<IInterval[]>([]);
    const [reps, setReps] = useState<number>(1);
    const [restInterval, setRestInterval] = useState<number>(90);
    const [workInterval, setWorkInterval] = useState<number>(10);
    const [leftHand, setLeftHand] = useState<IHand>({ hangboard: hangboards[0], fingerPosition: fingerPositions[0], hold: hangboards[0].holds[0] })
    const [rightHand, setRightHand] = useState<IHand>({ hangboard: hangboards[0], fingerPosition: fingerPositions[0], hold: hangboards[0].holds[0] })


    const [action, setAction] = useState<Action>({ kind: "hang", title: "Hang" });

    function handleReps(numReps: number) {
        setReps(numReps);
        if (action.kind != 'hang') {
            setAction({
                ...action,
                reps: numReps
            })
        }
    }

    const handleLeftFingerPosition = (name) => {
        let position = fingerPositions.find((el) => el.name === name);
        let newLeft = {
            ...leftHand,
            fingerPosition: position
        };
        setLeftHand(newLeft);
    };

    const handleRightFingerPosition = (name) => {
        let position = fingerPositions.find((el) => el.name === name);
        let newRight = {
            ...rightHand,
            fingerPosition: position
        };
        setRightHand(newRight);
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
        let newLeft = {
            ...leftHand,
            hangboard,
            hold
        };
        setLeftHand(newLeft);
    }

    function handleRightHand(name) {
        const [hangboard, hold] = handleHandString(name);
        let newRight = { ...rightHand, hangboard, hold };
        setRightHand(newRight);
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

    function handleDeleteInterval() {
        setIntervals([]);
    }

    function handleEditInterval(interval: IInterval, index: number) {
        //the correct way
        let newIntervals = [...intervals];
        newIntervals[index] = interval;
        setIntervals(newIntervals);
        
        //the below will not work
        // intervals[index] = interval;
        // setIntervals(intervals);
    }

    function handleCreateInterval() {
        setIntervals([...intervals, { workInterval, restInterval, leftHand, rightHand, action }]);
    }

    return (
        <div className="flex flex-col items-center">

            <section id="new-workout" className="flex flex-col space-y-4 pb-12 w-96">
                <h2 className="text-2xl text-center py-4">Create interval</h2>
                <div className="flex justify-between">
                    <div>Left hold</div>
                    <select
                        className="text-slate-600 w-48 rounded"
                        onChange={(e) => handleLeftHand(e.target.value)}
                    >
                        {hangboards.map((hangboard) =>
                            hangboard.holds.map((hold) => (
                                <option
                                    className="text-slate-600"
                                    key={`${hangboard.name}-${hold.name}`}
                                    value={`${hangboard.name}-${hold.name}`}
                                >
                                    {hangboard.title} {hold.title}
                                </option>
                            ))
                        )}
                    </select>
                </div>
                <div className="flex justify-between">
                    <div>Left hand</div>
                    <select
                        className="text-slate-600 w-48"
                        value={leftHand.fingerPosition.name}
                        onChange={(e) => {
                            handleLeftFingerPosition(e.target.value);
                        }}
                    >
                        {fingerPositions.map((fingerposition) => (
                            <option
                                key={fingerposition.name}
                                className="text-slate-600"
                                value={fingerposition.name}
                            >
                                {fingerposition.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between">
                    <div>Right hold</div>
                    <select
                        className="text-slate-600 w-48 rounded"
                        onChange={(e) => handleRightHand(e.target.value)}
                    >
                        {hangboards.map((hangboard) =>
                            hangboard.holds.map((hold) => (
                                <option
                                    className="text-slate-600"
                                    key={`${hangboard.name}-${hold.name}`}
                                    value={`${hangboard.name}-${hold.name}`}
                                >
                                    {hangboard.title} {hold.title}
                                </option>
                            ))
                        )}
                    </select>
                </div>
                <div className="flex justify-between">
                    <div>Right hand</div>
                    <select
                        className="text-slate-600 w-48"
                        value={rightHand.hold.name}
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
                </div>
                <div className="flex justify-between">
                    <label>Work Interval</label>
                    <input
                        className="rounded p-1 text-slate-600"
                        type="number"
                        placeholder={workInterval.toString()}
                        onChange={(e) => setWorkInterval(e.target.valueAsNumber)}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Rest Interval</label>
                    <input
                        className="rounded p-1 text-slate-600"
                        type="number"
                        placeholder={restInterval.toString()}
                        onChange={(e) => setRestInterval(e.target.valueAsNumber)}
                    />
                </div>
                <div className="flex justify-center">
                    <select
                        className="text-slate-600 rounded w-full text-center"
                        onChange={(e) => handleAction(e.target.value)}
                    >
                        <option value="hang">Hang</option>
                        <option value="pullup">Pullup</option>
                        <option value="leglift">Lift</option>
                    </select>
                </div>
                {action.kind === "pullup" || action.kind === "leglift" ? (
                    <div className="flex justify-between">
                        <label>Reps</label>
                        <input
                            className="text-slate-600"
                            type="number"
                            onChange={(e) => handleReps(e.target.valueAsNumber)}
                            placeholder={Number(1).toString()}
                        />
                    </div>
                ) : (
                    <div className="w-full h-6"></div>
                )}
                <div className="flex w-full justify-center">
                    <button
                        onClick={(e) => handleCreateInterval()}
                        className="w-1/2 bg-emerald-600 rounded"
                    >
                        Create interval
                    </button>
                </div>
            </section>
            <IntervalsTable intervals={intervals} handleEditInterval={handleEditInterval} />
            <div className="flex w-full justify-center">
                <button
                    onClick={(e) => handleDeleteInterval()}
                    className="w-48 bg-red-600 rounded mt-4 mb-8"
                >
                    Delete all intervals
                </button>
            </div>
        </div>
    );
};
