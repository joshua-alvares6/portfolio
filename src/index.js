import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAvh0saG-jTx9KJsymk9jD9guMvS76NI78",
  authDomain: "portfolio-3ca1a.firebaseapp.com",
  databaseURL: "https://portfolio-3ca1a.firebaseio.com",
  projectId: "portfolio-3ca1a",
  storageBucket: "portfolio-3ca1a.appspot.com",
  messagingSenderId: "638433818193",
  appId: "1:638433818193:web:061b3d3583b24aa9b22a70",
  measurementId: "G-VVEWH86J02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
