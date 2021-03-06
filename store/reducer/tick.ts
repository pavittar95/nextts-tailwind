

import { tickActionTypes } from '../actions'

const tickInitialState = {
    lastUpdate: 0,
    light: false,
}

export default function reducer(state = tickInitialState, action: any) {
    switch (action.type) {
        case tickActionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light,
            })
        default:
            return state
    }
}