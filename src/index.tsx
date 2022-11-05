/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Client from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import './style/style.less';

// @ts-ignore
const reactRoot = Client.createRoot(document.getElementById('root'));

reactRoot.render(<RouterProvider router={router} />);
