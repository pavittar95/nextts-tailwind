export const tickActionTypes = {
    TICK: 'TICK',
}

export const serverRenderClock = (isServer: boolean) => {
    return ({
        type: tickActionTypes.TICK,
        light: !isServer,
        ts: Date.now(),
    })
}

export const startClock = () => {
    return ({ type: tickActionTypes.TICK, light: true, ts: Date.now() });
}



export const countActionTypes = {
    ADD: 'ADD',
}

export const addCount = () => (dispatch: any) => {
    return dispatch({ type: countActionTypes.ADD })
}