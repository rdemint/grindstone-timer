import { IWorkout } from "../components/Timer";
import IntervalsTable from "../components/IntervalsTable";
import NewWorkout from "../components/NewWorkout";
import {useState} from "react";



export default function Dashboard() {
    const initialWorkouts: Array<IWorkout> = [
        {
            date: new Date('2022-10-30'),
            intervals: [
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
            ]
        },
        {
            date: new Date('2022-11-04'),
            intervals: [
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
            ]
        },
        {
            date: new Date('2023-01-14'),
            intervals: [
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'pullup', title: 'Pullup', reps: 3}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'pullup', title: 'Pullup', reps: 10}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: {kind: 'hang', title: 'Hang'}
                },
            ]
        }
    ];
    const [workouts, setWorkouts] = useState<Array<IWorkout>>(initialWorkouts)

    const sortedWorkouts: Array<IWorkout> = [...workouts].sort((a,b) => b.date.getTime()-a.date.getTime())

    return (
        <div className="flex flex-col items-center mt-12">
            <NewWorkout workouts={workouts} setWorkouts={setWorkouts} />
                <div className="flex flex-col space-y-4">
                    {sortedWorkouts?.map((workout, i) => (
                        <div key={i}>
                            <h2 className="text-xl">{workout.date.toDateString()}</h2>
                            <IntervalsTable date={workout.date} intervals={workout.intervals} />
                        </div>
                    ))}

                </div>
        </div>
    )
}
