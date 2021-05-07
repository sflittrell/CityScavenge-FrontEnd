import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {Router} from 'react-router';
import Register from './Register.js';
import Login from './Login.js';
import Home from './Home.js';
import Nav from './Nav.js';
import HowItWorks from './HowItWorks.js';
import HuntsPage from './HuntsPage.js';
import Hunt from './Hunt.js';
import MapPage from './MapPage.js';
import { AuthProvider } from '../Utilities/AuthContext';
import history from '../Utilities/history'
import ScavengeData from '../Utilities/ScavengeData';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router history={history}>
            <Nav />
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/howitworks'>
              <HowItWorks />
            </Route>
            <ScavengeData />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
