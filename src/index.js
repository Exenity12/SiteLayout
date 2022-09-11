import ReactDom from 'react-dom';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux-store';
import App from './App';

let rerenderEntireTree = () => {
  ReactDom.render(
    <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>,
    document.getElementById("root")
  );
}
rerenderEntireTree(store);

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
