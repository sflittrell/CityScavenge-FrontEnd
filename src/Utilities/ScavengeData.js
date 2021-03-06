import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { HuntProvider } from '../Utilities/HuntContext';
import HuntsPage from '../Components/HuntsPage';
import Hunt from '../Components/Hunt';
import WinPage from '../Components/WinPage';
import MapPage from '../Components/MapPage';


export default function ScavengeData() {
  

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
          <Route path='/win'>
            <WinPage />
          </Route>
        </Switch>
      </HuntProvider>
    </div>
  )
}
