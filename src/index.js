import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Provider from 'react-redux';

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider value = {store}>
          <App/>
        </Provider>
      </BrowserRouter>  
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree();

store.subscribe(renderEntireTree);

reportWebVitals();