import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { AppContainer } from 'react-hot-loader';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const root = document.getElementById('root');
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        root
    );

if (module.hot){
    module.hot.accept('./App', ()=> {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            root
        );
    })
}
