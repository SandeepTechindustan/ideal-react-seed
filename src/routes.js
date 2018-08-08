import React from 'react';
import './styles/main.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';

const Routes = props => {
  return (
    <div>
      <Home/>
    </div>
    // <Switch>
    //   <Route exact path="/" component={Home} />
    // </Switch>
  );
}

export default Routes;
