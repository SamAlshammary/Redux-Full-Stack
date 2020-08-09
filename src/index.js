import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux"; //applyMiddleware: allows us to use Redux middleware (thunk)
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';


const store = createStore( //the second parameter to create store is a combination of middleware that we're using, we are going to use (compose) function to bring that all together.
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )

  );
ReactDOM.render(
 
    <Provider store={store}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
      </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
