import { IWorkout } from "../components/Timer";
import WorkoutSummary from "../components/WorkoutSummary";



export default function Dashboard() {
    const workouts: Array<IWorkout> = [
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
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
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
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
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
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '30', title: '30mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '25', title: '25mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 90,
                    leftHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '20', title: '20mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
                {
                    workInterval: 10,
                    restInterval: 180,
                    leftHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    leftFingerPosition: {name: '1234', title: '4 finger'},
                    rightHold: {name: '15', title: '15mm edge', hangboardName:"grindstone", hangboardTitle:"Grindstone"},
                    rightFingerPosition: {name: '1234', title: '4 finger'},
                    action: 'hang'
                },
            ]
        }
    ]

    return (
        <div className="flex flex-col items-center mt-12">
                <div className="flex flex-col space-y-4">
                    {workouts?.map((workout, i) => (
                        <div key={i}>
                            <h2 className="text-xl">{workout.date.toDateString()}</h2>
                            <WorkoutSummary date={workout.date} intervals={workout.intervals} />
                        </div>
                    ))}

                </div>
        </div>
    )
}
