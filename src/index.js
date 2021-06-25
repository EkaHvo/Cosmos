import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Lena'},
  {id: 2, name: 'Ivan'},
  {id: 3, name: 'Dima'},
  {id: 4, name: 'Sveta'}

];

let posts = [
  {id: 1, text: 'Hello, friend', likesCount: 3},
  {id: 2, text: 'Hi, bro!', likesCount: 8}
];

let messages = [
  {id: 1, text: 'Hi'},
  {id: 2, text: 'How are you?'},
  {id: 3, text: 'Where are you come from?'},
  {id: 4, text: 'Do you like potato?'}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} posts={posts} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
