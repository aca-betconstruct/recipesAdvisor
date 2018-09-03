import Calendar from '../components/Calendar/Calendar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import Preferences from '../components/Preferences';
import ReceptePage from '../components/Recepte';
import CaloriesCalculator from '../components/CaloriesCalculator';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import MagazinePage from '../components/ProfileDemo';
import FastCooking from '../containers/FastCooking';
import PrivateRoute from '../containers/privateRoute';

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <div>

        <Switch location={isModal ? this.previousLocation : location}>
          <Route path={'/small'} component={FastCooking} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/preferences" component={Preferences} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/profdemo" component={MagazinePage} />
          <PrivateRoute path="/calculator" component={CaloriesCalculator} />
          <Route path="/calendar" component={Calendar} />
          <Route
            component={({ location }) => (
              <RoutesWithHeaderAndFooter location={location} />
            )}
          />
        </Switch>
        <Route path="/recepte/:id" component={ReceptePage} />
      </div>
    );
  }
}

const Routers = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default Routers;
