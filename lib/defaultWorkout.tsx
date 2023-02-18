import { IWorkout } from "../components/Timer";
import { grindstone } from "./hangboards";
import { fingerPositions } from "./fingerpositions";

 
 const defaultWorkout: IWorkout = {
    id: 0,
    name: null,
    date: new Date(),
    intervals: [
        {
            workInterval: 10,
            restInterval: 90,
            leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
            rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[1] },
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
            leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[1] },
            rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
            action: { kind: 'hang', title: 'Hang' }
        },
        {
            workInterval: 10,
            restInterval: 90,
            leftHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[0] },
            rightHand: { hangboard: grindstone, hold: grindstone.holds[0], fingerPosition: fingerPositions[1] },
            action: { kind: 'hang', title: 'Hang' }
        },
        {
            workInterval: 10,
            restInterval: 180,
            leftHand: { hangboard: grindstone, hold: grindstone.holds[3], fingerPosition: fingerPositions[0] },
            rightHand: { hangboard: grindstone, hold: grindstone.holds[3], fingerPosition: fingerPositions[0] },
            action: { kind: 'hang', title: 'Hang' }
        },
        {
            workInterval: 10,
            restInterval: 90,
            leftHand: { hangboard: grindstone, hold: grindstone.holds[2], fingerPosition: fingerPositions[0] },
            rightHand: { hangboard: grindstone, hold: grindstone.holds[2], fingerPosition: fingerPositions[0] },
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
        
}

export default defaultWorkout