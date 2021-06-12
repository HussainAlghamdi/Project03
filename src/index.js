import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from './Components/Nav'
import Contact from './Components/Contact'

ReactDOM.render(
  <Router>
    <Nav />
    <Route exact path="/" component={App} />
    <Route path="/contact" component={Contact} />
    <Route path="/logout" component={App} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
