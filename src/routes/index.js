import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import Preferences from '../components/Preferences';
import CaloriesCalculator from '../containers/CaloriesCalculator';
import Recipe from '../containers/Recipe';
import LoginForm from '../containers/Login';
import SignUpForm from '../containers/SignUp';
import PrivateRoute from '../containers/PrivateRoute';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/home/preferences" component={Preferences} />
          <Route path="/signUp" component={SignUpForm} />
          <Route
            path="/detail/:id"
            component={({ location, match, history }) => (
              <Recipe
                history={history}
                match={match}
                location={location}
              />
            )}
          />
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
