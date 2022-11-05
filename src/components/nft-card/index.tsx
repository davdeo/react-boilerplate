import React from 'react';

export class NFTCard extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <div className={'nft-card'}>
                <div className={'nested'} />
            </div>
        );
    }
}
