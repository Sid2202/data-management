import {atom} from 'recoil'

export const totalState = atom({
    key: 'TotalState',
    default: [{
        id: 0,
        quantity: 1,
        amt: 100
    },
    {
        id: 1,
        quantity: 4,
        amt: 200
    },
]
})