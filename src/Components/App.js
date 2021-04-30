import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Register from './Register.js';
import {AuthProvider} from '../Utilities/AuthContext';


function App() {

  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/register'>
            <Register
            register
            />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
