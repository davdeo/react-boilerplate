import { PayloadAction } from '@reduxjs/toolkit';

export type IncreaseAction = PayloadAction<{
    amount: number;
}>;

export type DecreaseAction = PayloadAction<{
    amount: number;
}>;
