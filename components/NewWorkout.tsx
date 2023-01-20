import React from 'react'
import { useState } from 'react'
import { IInterval, IHangboardHandHold, FingerPosition, IWorkout, Action } from './Timer'
import { fingerPositions } from "../lib/fingerpositions"
import { grindstone, simpleboard } from "../lib/hangboards"
import { Combobox } from '@headlessui/react'

const NewWorkout: React.FC<IInterval> = (defaultInterval) => {

    const restIntervalOptions = [180, 90, 60, 45, 30, 20, 15, 7]
    const workIntervalOptions = [6, 8, 10, 12, 15, 20, 25]
    
    const [restInterval, setRestInterval] = useState<number>(90);
    const [workInterval, setWorkInterval] = useState<number>(10);
    const [newInterval, setNewInterval] = useState<IInterval>();
    const [leftHand, setLeftHand] = useState<IHangboardHandHold>({ ...grindstone.handHolds[0], hangboardName: grindstone.name, hangboardTitle: grindstone.title });
    const [leftFingerPosition, setLeftFingerPosition] = useState<FingerPosition>(fingerPositions[0]);
    const [rightHand, setRightHand] = useState<IHangboardHandHold>({ ...grindstone.handHolds[0], hangboardName: grindstone.name, hangboardTitle: grindstone.title });
    const [rightFingerPosition, setRightFingerPosition] = useState<FingerPosition>(fingerPositions[0]);

    const [action, setAction] = useState<Action>({kind: 'hang', title: 'Hang'});
    const [pullupReps, setPullupReps] = useState<number>(1);
    
    return (
        <div className='flex flex-col items-center md:flex-row md:justify-center'>
                        <section id='new-workout'>
                <form>
                    <Combobox value={restInterval} onChange={setRestInterval}>
                        <Combobox.Input onChange={(event)=> setRestInterval(event.target.valueAsNumber)}/>
                        <Combobox.Options>
                            {
                                restIntervalOptions.map(
                                    (ri)=> (
                                        <Combobox.Option key={ri} value={ri}>{ri}</Combobox.Option>
                                    )
                                )
                            }
                        </Combobox.Options>
                    </Combobox>
                </form>

            </section>
        </div>
    )
}

export default NewWorkout