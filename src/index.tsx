/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Client from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { store } from './store';

import './style/style.less';

// @ts-ignore
const reactRoot = Client.createRoot(document.getElementById('root'));

reactRoot.render(
    <StoreProvider store={store}>
        <RouterProvider router={router} />
    </StoreProvider>
);
