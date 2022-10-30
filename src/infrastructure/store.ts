import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../slices';
import {logger} from 'redux-logger';

export const store = configureStore({
    reducer:  rootReducer,
    middleware: [
        logger,
    ],
});
