import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../containers/Header';
import PrivateRoutes from '../../containers/PrivateRoute';
import FooterPage from '../../components/Footer';

class RoutesWithHeaderAndFooter extends Component {
  render() {
    const { private: Private, component: Component, ...rest } = this.props;
    return (
      <Fragment>
        <Route render={({ location }) => <Header location={location} />} />
        {Private ? (
          <PrivateRoutes {...rest} render={props => <Component {...props} />} />
        ) : (
          <Route {...rest} render={props => <Component {...props} />} />
        )}
        <FooterPage />
      </Fragment>
    );
  }
}

export default RoutesWithHeaderAndFooter;
