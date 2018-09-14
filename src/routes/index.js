import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
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
          <RoutesWithHeaderAndFooter exact path="/" component={RandomRecipes} />
          <RoutesWithHeaderAndFooter
            exact
            path="/aboutUs"
            component={AboutUsPage}
          />
          <RoutesWithHeaderAndFooter
            exact
            path="/contactUs"
            component={ContactPage}
          />
          <PrivateRoute path="/home" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signUp" component={SignUpForm} />
          <Route
            exact
            path="/detail/:id"
            component={({ location, match, history }) => (
              <Recipe history={history} match={match} location={location} />
            )}
          />
          <PrivateRoute
            exact
            path="/calculator"
            component={CaloriesCalculator}
          />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
