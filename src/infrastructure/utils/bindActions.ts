import {ActionCreator, bindActionCreators} from 'redux';
import {store} from '../store';

export const bindActions = <T extends {[key: string]: unknown}>(actions: T) => {
    return Object.keys(actions).reduce((values, key) => (
        {
            ...values,
            [key]: bindActionCreators(
                actions[key] as ActionCreator<unknown>,
                store.dispatch
            ),
        }
    ), {} as T);
};
