import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import thunk from "redux-thunk";

import App from './App';
import "./App.css";
import * as serviceWorker from './serviceWorker';
import Cookies from "js-cookie";

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));
if(Cookies.get("loggedIn")){
    store.dispatch({type: "LOGIN"});
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
