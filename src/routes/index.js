import Calendar from '../components/Calendar/Calendar';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RoutesWithHeaderAndFooter from './routesWithHeaderAndFooter';
import Preferences from '../components/Preferences';
import ProfilePage from '../components/Profile';
import ReceptePage from '../containers/Recepte';
import CaloriesCalculator from '../components/CaloriesCalculator';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import MagazinePage from '../components/ProfileDemo';
import FastCooking from '../containers/FastCooking';
import PrivateRoute from '../containers/privateRoute';
import AuthenticatedComponent from '../containers/Authenticated';
import SmallCard from '../components/Cards/SmallCard';
import ViewPage from '../components/ViewPage';

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
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
    ); // not initial render
    return (
      <div>

        <Switch location={isModal ? this.previousLocation : location}>
          <Route path={'/small'} component={FastCooking} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/preferences" component={Preferences} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/somewhere/:id" component={ReceptePage} />*
          <Route path="/profdemo" component={MagazinePage} />
          <PrivateRoute path="/calculator" component={CaloriesCalculator} />
          <Route path="/calendar" component={Calendar} />
          <Route
            component={({ location }) => (
              <RoutesWithHeaderAndFooter location={location} />
            )}
          />
        </Switch>
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
