import React from 'react';
import { Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import AnimatableImages from '../../components/AnimatableImages';
import Recipes from '../../containers/Recipes';
import Filter from '../../containers/Filter';
import Favourites from '../../containers/Favourites';
import styles from './styles';

const Home = ({ classes }) => {
  return (
    <div>
      <AnimatableImages />
      <div className={classes.main}>
        <Route path="/home" component={Filter} />
        <Route exact path="/home/" render={props => <Recipes {...props} />} />
        <Route path={'/home/favourites'} component={() => <Favourites />} />
      </div>
    </div>
  );
};
Home.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Home);
