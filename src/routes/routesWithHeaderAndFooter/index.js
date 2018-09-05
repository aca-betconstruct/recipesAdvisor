import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../containers/Header';
import Home from '../../components/Home';
import Settings from '../../components/Settings';
import PrivateRoutes from '../../containers/PrivateRoute';
import Recipes from '../../containers/Recipes';
import RandomRecipes from '../../components/RandomRecipes';
import Favourites from '../../containers/Favourites';
import FooterPage from '../../components/Footer';
import AboutUsPage from '../../components/AboutUs';
import ContactPage from '../../components/ContactUs';

class RoutesWithHeaderAndFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <Header location={this.props.location} />
        <Switch>
          <Route path="/" component={RandomRecipes} />
          <Route path="/aboutUs" component={AboutUsPage} />
          <Route path="/contactUs" component={ContactPage} />
          <PrivateRoutes path="/home" component={Home} />
          <Route path="/home/favourites" component={Favourites} />
        </Switch>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default RoutesWithHeaderAndFooter;
