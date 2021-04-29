import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Register from './Register.js';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/register'>
            <Register
            register
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
