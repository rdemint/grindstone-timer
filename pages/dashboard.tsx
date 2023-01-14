import {PrismaClient } from '@prisma/client'

export async function getStaticProps(context) {

    const prisma = new PrismaClient()
    const intervals = [
        {
            leftHold: '30',
            rightHold: '15',
            restInterval: 30,
            workInterval: 20
        },
        {
            leftHold: '20',
            rightHold: '10',
            restInterval: 20,
            workInterval: 10
        },
        {
            leftHold: '10',
            rightHold: '10',
            restInterval: 90,
            workInterval: 10
        },
    ]
    
    return {
        props: {intervals}
    }
}

export default function DashBoard({ intervals }) {
    return (
        <div className="flex flex-col items-center max-w-5xl space-y-2">
            <div>
                <table className="table-fixed">
                    <thead>
                        <td>Left</td>
                        <td>Right</td>
                        <td>Rest</td>
                        <td>Work</td>
                    </thead>
                    <tbody>
                        {intervals.map(
                            (interval, i) => (
                                <tr key={i}>
                                    <td>{interval.leftHold}</td>
                                    <td>{interval.rightHold}</td>
                                    <td>{interval.restInterval}</td>
                                    <td>{interval.workInterval}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}