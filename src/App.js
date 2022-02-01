import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
const App = () => {
  return (
    <Switch>
      <Route path='/' component={Homepage} />
    </Switch>
  )
}

export default App;
