import { IWorkout } from "../components/Timer";
import IntervalsTable from "../components/IntervalsTable";
import Workouts from "../components/Workouts"
import { useState } from "react";
import { grindstone, simpleboard } from "../lib/hangboards";
import { fingerPositions } from "../lib/fingerpositions";




export default function Dashboard() {
    const initialWorkouts: Array<IWorkout> = [
        {
            id: 0,
            date: new Date('2022-10-30'),
            intervals: [
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
            ]
        },
        {
            id:1,
            date: new Date('2022-11-04'),
            intervals: [
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
            ]
        },
        {
            id: 2,
            date: new Date('2023-01-14'),
            intervals: [
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'pullup', title: 'Pullup', reps: 3 }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'pullup', title: 'Pullup', reps: 10 }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
                    action: { kind: 'hang', title: 'Hang' }
                },
            ]
        }
    ];
    const [workouts, setWorkouts] = useState<Array<IWorkout>>([...initialWorkouts].sort((a, b) => b.date.getTime() - a.date.getTime()));

    return (
        <div className="flex flex-col items-center mt-12">
            <Workouts workouts={workouts} setWorkouts={(workouts)=>setWorkouts(workouts)} />
        </div>
    )
}
