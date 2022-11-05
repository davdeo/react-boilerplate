import { combineReducers } from 'redux';

import { counterReducer } from './modules/counter';

export const rootReducer = combineReducers({
    counter: counterReducer
});
