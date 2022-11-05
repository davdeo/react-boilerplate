import { configureStore } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './root-epic';
import { rootReducer } from './root-reducer';
import { State } from './state.type';

const epicMiddleware = createEpicMiddleware<Action, Action, State, void>();

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(epicMiddleware)
});

epicMiddleware.run(rootEpic);
