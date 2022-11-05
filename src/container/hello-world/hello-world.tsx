import React, { FunctionComponent } from 'react';

import { NFTCard } from '../../components/nft-card';

export interface HelloWorldStateProps {
    counter: number;
}

export interface HelloWorldDispatchProps {
    increase: (payload: { amount: number }) => void;
    decrease: (payload: { amount: number }) => void;
    logCounterAsync: (payload: { delay: number }) => void;
}

type HelloWorldProps = HelloWorldStateProps & HelloWorldDispatchProps;

export const HelloWorldComponent: FunctionComponent<HelloWorldProps> = ({
    counter,
    decrease,
    increase,
    logCounterAsync
}) => (
    <div className={'hello-world'}>
        <div>{'Hello World!'}</div>
        <div>{`Counter: ${counter}`}</div>
        <button onClick={() => increase({ amount: 1 })} type={'button'}>
            {'increase'}
        </button>
        <button onClick={() => decrease({ amount: 1 })} type={'button'}>
            {'decrease'}
        </button>
        <button onClick={() => logCounterAsync({ delay: 2000 })} type={'button'}>
            {'log async'}
        </button>
        <div>
            <NFTCard />
        </div>
    </div>
);
