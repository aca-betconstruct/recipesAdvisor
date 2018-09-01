import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Settings from '../../components/Settings';
import PrivateRoutes from '../privateRoutes';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import Recipes from '../../containers/Recipes';
import RandomRecipes from '../../components/RandomRecipes';
import Favourites from '../../containers/Favourites';
import FooterPage from '../../components/FooterDemo';
import AboutUsPage from '../../components/AboutUsDemo';
import ContactPage from '../../components/ContactUsDemo';

class RoutesWithHeaderAndFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={RandomRecipes} />
        <Route path="/aboutUs" component={AboutUsPage} />
        <Route path="/profile" component={Recipes} />
        <Route path="/contactUs" component={ContactPage} />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/favourites" component={Favourites} />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default RoutesWithHeaderAndFooter;
