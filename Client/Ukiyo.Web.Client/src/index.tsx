import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './app';
import Reset from './utilities/reset';

ReactDOM.render(
    <>
        <Reset />
        <App />
    </>,
    document.getElementById('root')
);

serviceWorker.unregister();
