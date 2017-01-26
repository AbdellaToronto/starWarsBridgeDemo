import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from '../containers/App/App';
import Planets from '../containers/Planets/Planets';


export const Routes = () =>
  (<Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="planets" component={Planets} />
</Router>);