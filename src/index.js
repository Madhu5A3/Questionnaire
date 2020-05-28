import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxReducer from './screens/RootReducer/ReduxReducer';
import thunk from 'redux-thunk';

const store = createStore(ReduxReducer, applyMiddleware(thunk))
/*store.dispatch({
  type: 'ADD_QUESTIONS',
  payload: [
    {
      "id": 1,
      "content": "What is the Capital of India?"
    }
  ]
})
console.log(store.getState())*/

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
