import { AnyAction } from 'redux';
import { diff } from 'jsondiffpatch';
import { HYDRATE } from 'next-redux-wrapper';

type State = {
    tick: string;
    page?: string;
}

// create your reducer
const reducer = (state: State = { tick: 'init' }, action: AnyAction) => {
    console.log('state----', state);
    switch (action.type) {
        case HYDRATE:
            const stateDiff = diff(state, action.payload) as any;
            const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X'); // or any other criteria
            return {
                ...state,
                ...action.payload,
                page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
            };
        case 'TICK':
            return { ...state, tick: action.payload };
        default:
            return state;
    }
};

export default reducer;