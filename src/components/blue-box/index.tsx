import React from 'react';

export class BlueBox extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <div className={'blue-box'}>
                <div className={'nested'} />
            </div>
        );
    }
}
