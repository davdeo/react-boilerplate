import { combineEpics } from 'redux-observable';

import { logCounterAsyncEpic } from './counter';

export * from './actions';

export const counterEpic = combineEpics(logCounterAsyncEpic);
