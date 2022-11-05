import { Action } from 'redux';
import { combineEpics, StateObservable } from 'redux-observable';
import { catchError, Observable } from 'rxjs';

import { counterEpic } from './modules/counter';
import { State } from './state.type';

const epics = combineEpics(counterEpic);

/**
 * The root epic for this application. Here we handle all occurring errors and keep the rx-world spinning, in case
 * something happens.
 *
 * @param action$ The action observable.
 * @param state$ The state observable.
 * @param dependencies A parameter only necessary for the typing.
 * @returns The epics stream.
 */
export function rootEpic(
    action$: Observable<Action>,
    state$: StateObservable<State>,
    dependencies: unknown
): Observable<Action> {
    return epics(action$, state$, dependencies).pipe(
        catchError((error: Error, epicObservable: Observable<Action>) => {
            // eslint-disable-next-line no-console
            console.error(error);

            return epicObservable;
        })
    );
}
