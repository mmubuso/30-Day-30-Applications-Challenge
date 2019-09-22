import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Library from './containers/Library/Library';
import Form from './components/Form/Form';


function App() {
  return (

    <Router className="App">
      <nav className="mb-4 navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Library} />
        <Route path ='/forms/:bookId' component={Form} />
      </Switch>
    </Router>

  );
}

export default App;
