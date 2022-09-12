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

reportWebVitals();
