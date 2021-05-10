import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { HuntProvider } from '../Utilities/HuntContext';
import HuntsPage from '../Components/HuntsPage';
import Hunt from '../Components/Hunt';
import MapPage from '../Components/MapPage';
import { useAuth } from '../Utilities/AuthContext';


export default function ScavengeData() {

  const { token } = useAuth();

  

  return (
    <div>
      <HuntProvider>
        <Switch>
          <Route path='/findahunt'>
            <HuntsPage />
          </Route>
          <Route path='/hunt/:id'>
            <Hunt />
          </Route>
          <Route path='/map'>
            <MapPage />
          </Route>
        </Switch>
      </HuntProvider>
    </div>
  )
}
