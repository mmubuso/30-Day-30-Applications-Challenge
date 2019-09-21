import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Library from './containers/Library/Library';


function App() {
  return (

    <Router className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
      </nav>
      <Switch>
        <Route exact path='/' component={Library} />
      </Switch>
    </Router>

  );
}

export default App;
