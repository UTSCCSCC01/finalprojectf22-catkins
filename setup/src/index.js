import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";
import { Provider } from 'react-redux';
import {persistor, store} from './store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
<BrowserRouter>

    <App />

    </BrowserRouter>
    </PersistGate>
    </Provider>


);