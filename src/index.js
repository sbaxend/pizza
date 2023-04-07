import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'


//REDUCERS

const totalCost = (state = 0, action) => {
    // this will be total reducer
    
    return state
};

const customerInfo = (state = {}, action) => {
    // this holds the customers info 

    return state
};

const customersPizza = (state ={}, action) => {
    
    return state
};

const storeInstance = createStore(
    combineReducers(
        {
            // reducer goes here
        }
    ),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);


