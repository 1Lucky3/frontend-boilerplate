import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import Core from './pages/Core';
import {store} from './infrastructure/store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Core/>
    </Provider>
);