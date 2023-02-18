import { IWorkout } from "../components/Timer";
import { grindstone } from "./hangboards";
import { fingerPositions } from "./fingerpositions";

const quickWorkouts: Array<IWorkout> = [
    {
        id: 1,
        name: 'Test',
        date: new Date(),
        intervals: [
            {
                workInterval: 2,
                restInterval: 3,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[1], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 2,
                restInterval: 4,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[1], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 3,
                restInterval: 4,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[1] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[1] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 3,
                restInterval: 3,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[2], hold: grindstone.holds[2] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[2], hold: grindstone.holds[2] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 3,
                restInterval: 2,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
            {
                workInterval: 2,
                restInterval: 3,
                leftHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                rightHand: { hangboard: grindstone, fingerPosition: fingerPositions[0], hold: grindstone.holds[0] },
                action: { kind: 'hang', title: 'Hang' }
            },
        ]
    },
    {
        id: 2,
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