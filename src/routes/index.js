import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import Preferences from '../components/Preferences';
import ReceptePage from '../containers/Recepte';
import CaloriesCalculator from '../components/CaloriesCalculator';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import PrivateRoute from '../containers/privateRoute';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/preferences" component={Preferences} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/somewhere/:id" component={ReceptePage} />*
          <PrivateRoute path="/calculator" component={CaloriesCalculator} />
          <Route
            component={({ location }) => (
              <RoutesWithHeaderAndFooter location={location} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
