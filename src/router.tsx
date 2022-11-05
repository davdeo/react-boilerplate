import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from './container/app';
import { HelloWorld } from './container/hello-world';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HelloWorld />
            }
        ]
    }
]);
