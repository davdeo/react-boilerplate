import { Action } from 'redux';
import { StateObservable } from 'redux-observable';
import { EMPTY, filter, mergeMap, Observable, withLatestFrom } from 'rxjs';

import { State } from '../../../state.type';

import { logCounterAsync } from './actions';

export function logCounterAsyncEpic(
    action$: Observable<Action>,
    state$: StateObservable<State>
): Observable<Action> {
    return action$.pipe(
        filter(logCounterAsync.match),
        withLatestFrom(state$),
        mergeMap(([action, state]) => {
            setTimeout(() => {
                /* eslint-disable no-console */
                console.log(`Value on call: ${state.counter.value}`);
                console.log(`Current value: ${state$.value.counter.value}`);
                /* eslint-enable no-console */
            }, action.payload.delay);

            return EMPTY;
        })
    );
}
