import React, { FunctionComponent } from 'react';
import { NFTCard } from '../../components/nft-card';

export const App: FunctionComponent = () => (
    <div className="app">
        <div>Hello World!</div>
        <div>
            <NFTCard />
        </div>
    </div>
);
