import React from "react";
import { useState } from "react";
import {
    IInterval,
    IHangboardHandHold,
    FingerPosition,
    IWorkout,
    Action,
} from "./Timer";
import { fingerPositions } from "../lib/fingerpositions";
import { grindstone, simpleboard, hangboards } from "../lib/hangboards";
import { Combobox } from "@headlessui/react";
import IntervalsTable from "./IntervalsTable";

function NewWorkout({ workouts, setWorkouts }) {
    const [intervals, setIntervals] = useState<IInterval[]>([]);
    const [restInterval, setRestInterval] = useState<number>(90);
    const [workInterval, setWorkInterval] = useState<number>(10);
    const [leftHand, setLeftHand] = useState<IHangboardHandHold>({
        ...grindstone.handHolds[0],
        hangboardName: grindstone.name,
        hangboardTitle: grindstone.title,
    });
    const [leftFingerPosition, setLeftFingerPosition] = useState<FingerPosition>(
        fingerPositions[0]
    );
    const [rightHand, setRightHand] = useState<IHangboardHandHold>({
        ...grindstone.handHolds[0],
        hangboardName: grindstone.name,
        hangboardTitle: grindstone.title,
    });
    const [rightFingerPosition, setRightFingerPosition] =
        useState<FingerPosition>(fingerPositions[0]);

    const [action, setAction] = useState<Action>({ kind: "hang", title: "Hang" });
    const [reps, setReps] = useState<number>(1);
    const [pullupReps, setPullupReps] = useState<number>(1);

    const handleLeftFingerPosition = (name) => {
        handleFingerPosition(name, setLeftFingerPosition);
    };

    const handleRightFingerPosition = (name) => {
        handleFingerPosition(name, setRightFingerPosition);
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
    }

    function handleAction(name) {
        switch (name) {
            case "pullup":
                setAction({ kind: "pullup", title: "Pullup", reps: 0 });
                break;
            case "leglift":
                setAction({ kind: "leglift", reps: 0, title: "Leg lift" });
                break;
            case "hang":
                setAction({ kind: "hang", title: "Hang" });
                break;
        }
    }

    function handleNewInterval() {
        setIntervals([
            ...intervals,
            {
                restInterval,
                workInterval,
                leftFingerPosition,
                rightFingerPosition,
                rightHold: rightHand,
                leftHold: leftHand,
                action
            }
        ]);

    }

    function handleDeleteInterval() {
        setIntervals([]);
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
                            hangboard.handHolds.map((hold) => (
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
                        value={leftFingerPosition.name}
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
                            hangboard.handHolds.map((hold) => (
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
                        value={rightFingerPosition.name}
                        onChange={(e) => {
                            handleRightFingerPosition(e.target.value);
                        }}
                    >
                        {fingerPositions.map((fingerposition) => (
                            <option className="text-slate-600" value={fingerposition.name}>
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
                            onChange={(e) => setReps(e.target.valueAsNumber)}
                            placeholder={reps.toString()}
                        />
                    </div>
                ) : (
                    <div className="w-full h-6"></div>
                )}
                <div className="flex w-full justify-center">
                    <button
                        onClick={(e) => handleNewInterval()}
                        className="w-1/2 bg-emerald-600 rounded"
                    >
                        Create interval
                    </button>
                </div>
            </section>
            <IntervalsTable intervals={intervals} />
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

export default NewWorkout;
