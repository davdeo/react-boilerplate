import { createAction } from '@reduxjs/toolkit';

import { MODULE_NAME } from '../constants';

export const logCounterAsync = createAction<{ delay: number }>(`${MODULE_NAME}/logCounterAsync`);
