import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import'./index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import  ReactDom  from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
let root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
)
serviceWorkerRegistration.register();