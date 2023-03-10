import { IHangboard } from '../components/Timer'

export const noHangboard: IHangboard = {
    name: 'undefined',
    title: 'None',
    holds: [
        {
            name: 'undefined',
            title: ''
        }
    ]
}

export const grindstone: IHangboard = {
    name: 'grindstone',
    title: 'Grindstone',
    holds: [
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
    holds: [
        { name: 'jug', title: 'jug'},
        { name: '10', title: '10mm edge' },
        { name: '8', title: '8mm edge' },
        { name: '6', title: '6mm edge' }
    ]
}

export const hangboards: Array<IHangboard> = [grindstone, simpleboard, noHangboard]