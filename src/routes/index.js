import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import Preferences from '../components/Preferences';
import CaloriesCalculator from '../containers/CaloriesCalculator';
import Recipe from '../containers/Recipe';
import LoginForm from '../containers/Login';
import SignUpForm from '../containers/SignUp';
import PrivateRoute from '../containers/PrivateRoute';
import Home from '../components/Home';
import RandomRecipes from '../components/RandomRecipes';
import AboutUsPage from '../components/AboutUs';
import ContactPage from '../components/ContactUs';
import ErrorPage from '../containers/ErrorPage';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <RoutesWithHeaderAndFooter exact path="/" component={RandomRecipes} />
          <RoutesWithHeaderAndFooter path="/aboutUs" component={AboutUsPage} />
          <RoutesWithHeaderAndFooter
            path="/contactUs"
            component={ContactPage}
          />
          <PrivateRoute
            exact
            path="/home/preferences"
            component={Preferences}
          />
          <RoutesWithHeaderAndFooter path="/home" component={Home} />
          <Route path="/signUp" component={SignUpForm} />
          <Route
            path="/detail/:id"
            component={({ location, match, history }) => (
              <Recipe history={history} match={match} location={location} />
            )}
          />
          <PrivateRoute path="/calculator" component={CaloriesCalculator} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
