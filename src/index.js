import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'


//REDUCERS

const totalCost = (state = 0, action) => {
    if (action.type === 'ADD_TOTAL_COST') {
        return state + action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
};

const customerInfo = (state = {}, action) => {
    if (action.type === 'SET_CUSTOMER_INFO') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return {};
    }

    return state;
};

const customersPizza = (state = [], action) => {
    if (action.type === 'ADD_CUSTOMER_PIZZA') {
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_FORM') {
        return [];
    }
    return state
};

const storeInstance = createStore(
    combineReducers(
        {
            // reducer goes here
            totalCost,
            customerInfo,
            customersPizza
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


