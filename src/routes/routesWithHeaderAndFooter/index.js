import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../containers/Header';
import Home from '../../components/Home';
import PrivateRoutes from '../../containers/PrivateRoute';
import RandomRecipes from '../../components/RandomRecipes';
import FooterPage from '../../components/Footer';
import AboutUsPage from '../../components/AboutUs';
import ContactPage from '../../components/ContactUs';

class RoutesWithHeaderAndFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <Header location={this.props.location} />
        <Switch>
          <Route exact path="/" component={RandomRecipes} />
          <Route path="/aboutUs" component={AboutUsPage} />
          <Route path="/contactUs" component={ContactPage} />
          <PrivateRoutes path="/home" component={Home} />
        </Switch>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default RoutesWithHeaderAndFooter;
