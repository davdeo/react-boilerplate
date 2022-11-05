import { connect } from 'react-redux';

import { decrease, increase, logCounterAsync } from '../../modules/counter';
import { State } from '../../state.type';

import { HelloWorldComponent, HelloWorldDispatchProps, HelloWorldStateProps } from './hello-world';

function mapStateToProps(state: State): HelloWorldStateProps {
    return {
        counter: state.counter.value
    };
}

const mapDispatchToProps: HelloWorldDispatchProps = {
    increase,
    decrease,
    logCounterAsync
};

export const HelloWorld = connect<HelloWorldStateProps, HelloWorldDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorldComponent);
