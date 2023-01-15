import prisma from '../lib/prisma'

export async function getServerSideProps(context) {


    let pIntervals = await prisma.interval.findMany()

    
    // const intervals = [
    //     {
    //         leftHold: '30',
    //         rightHold: '15',
    //         restInterval: 30,
    //         workInterval: 20
    //     },
    //     {
    //         leftHold: '20',
    //         rightHold: '10',
    //         restInterval: 20,
    //         workInterval: 10
    //     },
    //     {
    //         leftHold: '10',
    //         rightHold: '10',
    //         restInterval: 90,
    //         workInterval: 10
    //     },
    // ]
    
    return {
        props: {pIntervals}
    }
}

export default function DashBoard({ pIntervals }) {
    return (
        <div className="flex flex-col items-center space-y-2 w-full">
            <div>
            {pIntervals.length > 0 ?
                <>
                    <h4 className="text-left py-4 text-3xl">Workout Summary</h4>
                    <table className="w-72">
                        <thead>
                            <tr className="w-full text-left">
                                <th>Left</th>
                                <th>Right</th>
                                <th>Work</th>
                                <th>Rest</th>
                            </tr>
                        </thead>
                        <tbody>
                                {pIntervals.map((interval, i) => (
                                    <tr key={i} className="text-left">
                                        <td>{interval.leftHold}</td>
                                        <td>{interval.rightHold}</td>
                                        <td>{interval.workInterval}</td>
                                        <td>{interval.restInterval}</td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </>
                :
                <div className="text-slate-400 py-4">No intervals completed yet.</div>
            }
        </div>
        </div>
    )
}