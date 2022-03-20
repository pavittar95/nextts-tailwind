// store.ts

import { createStore, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import rootReducer from './reducer';


// create a makeStore function
const makeStore = () => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true });