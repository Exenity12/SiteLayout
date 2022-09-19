import ReactDom from 'react-dom';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux-store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {
  ReactDom.render(
    <BrowserRouter>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById("root")
  );
}
rerenderEntireTree(store);

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

reportWebVitals();
