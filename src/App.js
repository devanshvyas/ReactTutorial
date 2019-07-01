import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './login.component'
import Login from './login.component';
import SignUp from './signup.component';

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signUp'} className="nav-link">Sign Up</Link>
                </li>
              </ul>
            </div>
        </nav>
        <Route path= "/" exact component = {Login}/>
        <Route path= "/login" exact component = {Login}/>
        <Route path= "/signUp" exact component = {SignUp}/>
    </div>
  );
}

export default App;
