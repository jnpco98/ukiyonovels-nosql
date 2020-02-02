import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'simplebar/dist/simplebar.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './app';
import Reset from './utilities/reset';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer, {}, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <Reset />
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
