import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import AnimatableImages from '../../components/AnimatableImages';
import SideBar from '../SideBar';
import ErrorPage from '../../containers/ErrorPage';
import Recipes from '../../containers/Recipes';
import Filter from '../../containers/Filter';
import Favourites from '../../containers/Favourites';
import styles from './styles';
import PrivateRoute from '../../containers/PrivateRoute';
import RoutesWithHeaderAndFooter from '../../routes/routesWithHeaderAndFooter';
import Preferences from '../Preferences';

const Home = ({ classes }) => {
  return (
    <Switch>
      <PrivateRoute exact path="/home/preferences" component={Preferences} />
      <RoutesWithHeaderAndFooter
        exact
        path={'/home'}
        component={() => (
          <Fragment>
            <AnimatableImages />
            <div className={classes.main}>
              <Route exact path="/home" component={SideBar} />
              <div className={classes.content}>
                <div className={classes.row}>
                  <Route exact path="/home" component={Filter} />
                  <Route exact path="/home" component={Recipes} />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      />
      <RoutesWithHeaderAndFooter
        exact
        path="/home/favourites"
        component={() => (
          <Fragment>
            <AnimatableImages />
            <Favourites />
          </Fragment>
        )}
      />
      <Route component={ErrorPage} />
    </Switch>
  );
};
Home.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Home);
