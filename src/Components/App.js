import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Register.js';
import Login from './Login.js';
import Home from './Home.js';
import { AuthProvider } from '../Utilities/AuthContext';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' >
              <Home />
              </Route>
            <Route path='/register'>
              <Register
                register
              />
            </Route>
            <Route path='/login'>
              <Login
              />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
