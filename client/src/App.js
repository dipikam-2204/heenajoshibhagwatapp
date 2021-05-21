import React, { Component } from '../node_modules/@types/react';
import { Route, Switch } from '../node_modules/react-router-dom';
import './View/App.css';
import Home from './Home';
import List from './Dashboard';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;