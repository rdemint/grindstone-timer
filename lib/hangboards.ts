import { IHangboard } from '../components/Timer'

export const grindstone: IHangboard = {
    name: 'grindstone',
    title: 'Grindstone mk2',
    edgeMap: [
        ['10', '8'],
        ['30', '25'],
        ['20', '15'],
    ],
    handHolds: [
        {
            name: 'jug',
            title: 'Jug'
        },
        {
            name: '10',
            title: '10mm edge'
        },
        {
            name: '8',
            title: '8mm edge'
        },
        {
            name: '15',
            title: '15mm edge'
        },
        {
            name: '20',
            title: '20mm edge'
        },
        {
            name: '25',
            title: '25mm edge'
        },
        {
            name: '30',
            title: '30mm edge'
        },
        {
            name: 'slot',
            title: 'Slot'
        },
    ]

}

export const simpleboard = {
    name: 'simpleboard',
    title: 'Simple Board',
    edgeMap: [
        ['10'],
        ['8'],
        ['6']
    ],
    handHolds: [
        { name: 'jug', title: 'jug'},
        { name: '10', title: '10mm edge' },
        { name: '8', title: '8mm edge' },
        { name: '6', title: '6mm edge' }
    ]
}