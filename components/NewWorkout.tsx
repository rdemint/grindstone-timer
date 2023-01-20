import React from 'react'
import { useState } from 'react'
import { IInterval, IHangboardHandHold, FingerPosition, IWorkout, Action } from './Timer'
import { fingerPositions } from "../lib/fingerpositions"
import { grindstone, simpleboard } from "../lib/hangboards"
import { Combobox } from '@headlessui/react'

// function WorkoutComboBox({name, label, valueState, setValueState, valueOptions, inputOnChange, displayValue}) {
//     return (
//         <Combobox name={name} value={valueState} onChange={setValueState}>
//                     <div className='relative'>
//                         <div className='relative w-full overflow-hidden'>
//                             <Combobox.Label className='pr-2'>Rest Interval</Combobox.Label>
//                             <Combobox.Input
//                                 className='text-slate-800'
//                                 onChange={inputOnChange}
//                                 displayValue={displayValue}
//                             />
//                         </div>
//                         <Combobox.Options className='absolute max-h-60 w-full bg-slate-600'>
//                             {
//                                 valueOptions.map(
//                                     (option) => (
//                                         <Combobox.Option
//                                             className='relative'
//                                             key={option}
//                                             value={option}>{option}</Combobox.Option>
//                                     )
//                                 )
//                             }
//                         </Combobox.Options>
//                     </div>
//                 </Combobox>
//     )
// }
    


const NewWorkout: React.FC = () => {

    const restIntervalOptions = [180, 90, 60, 45, 30, 20, 15, 7]
    const workIntervalOptions = [6, 8, 10, 12, 15, 20, 25]

    const [restInterval, setRestInterval] = useState<number>(90);
    const [query, setQuery] = useState<number>();

    const [workInterval, setWorkInterval] = useState<number>(10);
    const [newInterval, setNewInterval] = useState<IInterval>();
    const [leftHand, setLeftHand] = useState<IHangboardHandHold>({ ...grindstone.handHolds[0], hangboardName: grindstone.name, hangboardTitle: grindstone.title });
    const [leftFingerPosition, setLeftFingerPosition] = useState<FingerPosition>(fingerPositions[0]);
    const [rightHand, setRightHand] = useState<IHangboardHandHold>({ ...grindstone.handHolds[0], hangboardName: grindstone.name, hangboardTitle: grindstone.title });
    const [rightFingerPosition, setRightFingerPosition] = useState<FingerPosition>(fingerPositions[0]);

    const [action, setAction] = useState<Action>({ kind: 'hang', title: 'Hang' });
    const [pullupReps, setPullupReps] = useState<number>(1);

    return (
        <div className='flex flex-col items-center md:flex-row md:justify-center'>
            <section id='new-workout'>
                <Combobox name='restInterval' value={leftFingerPosition} onChange={setLeftFingerPosition}>
                    <div className='relative'>
                        <div className='relative w-full overflow-hidden'>
                            <Combobox.Label className='pr-2'>Left Finger Position</Combobox.Label>
                            <Combobox.Input
                                className='text-slate-800'
                                onChange={(event) => setLeftFingerPosition(event.target)}
                                displayValue={()=> leftFingerPosition.title}
                            />
                        </div>
                        <Combobox.Options className='absolute max-h-60 w-full bg-slate-600'>
                            {
                                fingerPositions.map(
                                    (option) => (
                                        <Combobox.Option
                                            className='relative'
                                            key={option.name}
                                            value={option}>{option.title}</Combobox.Option>
                                    )
                                )
                            }
                        </Combobox.Options>
                    </div>
                </Combobox>
                <div>{leftFingerPosition.title}</div>
            </section>
        </div>
    )
}

export default NewWorkout