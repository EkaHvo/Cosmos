import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state = { store.getState() } dispatch = { store.dispatch.bind(store) }/>
      </BrowserRouter>  
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree();

store.subscribe(renderEntireTree);

reportWebVitals();