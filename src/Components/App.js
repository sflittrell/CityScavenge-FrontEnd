import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Register.js';
import Login from './Login.js';
import Home from './Home.js';
import Nav from './Nav.js';
import WhatWeDo from './WhatWeDo.js';
import MapPage from './MapPage.js';
import { AuthProvider } from '../Utilities/AuthContext';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Nav />
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
              <Login />
            </Route>
            <Route path='/whatwedo'>
              <WhatWeDo />
            </Route>
            <Route path='/map'>
              <MapPage />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
