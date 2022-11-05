import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router';

export const App: FunctionComponent = () => (
    <div className={'app'}>
        <Outlet />
    </div>
);
