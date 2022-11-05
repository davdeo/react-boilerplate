import { createSlice } from '@reduxjs/toolkit';

import { MODULE_NAME } from '../constants';

import { DecreaseAction, IncreaseAction } from './action-types';

interface CounterReducerState {
    value: number;
}

const INITIAL_STATE: CounterReducerState = {
    value: 0
};

const slice = createSlice({
    name: MODULE_NAME,
    initialState: INITIAL_STATE,
    reducers: {
        increase: (state, action: IncreaseAction) => {
            state.value += action.payload.amount;
        },
        decrease: (state, action: DecreaseAction) => {
            state.value -= action.payload.amount;
        }
    }
});

export const { decrease, increase } = slice.actions;
export const counterReducer = slice.reducer;
