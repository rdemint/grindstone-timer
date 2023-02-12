import { IWorkout } from "../components/Timer";
import { grindstone } from "./hangboards";
import { fingerPositions } from "./fingerpositions";

const quickWorkouts: Array<IWorkout> = [
    {
        name: 'Test',
        date: new Date(),
        intervals: [
            {
                workInterval: 10,
                restInterval: 90,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 90,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 90,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 90,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 90,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 90,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
        ]
    },
    {
        name: 'High intensity',
        date: new Date(),
        intervals: [
            {
                workInterval: 10,
                restInterval: 180,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 180,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 180,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 180,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 180,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 10,
                restInterval: 180,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
        ]
    }
]

export default quickWorkouts