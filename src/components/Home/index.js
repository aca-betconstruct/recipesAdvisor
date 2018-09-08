import React from 'react';
import { Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import AnimatableImages from '../../components/AnimatableImages';
import SideBar from '../SideBar';
import Recipes from '../../containers/Recipes';
import Filter from '../../containers/Filter';
import Favourites from '../../containers/Favourites';
import styles from './styles';

const Home = ({ classes }) => {
  return (
    <div>
      <AnimatableImages />
      <div className={classes.main}>
        <Route exact path='/home' component={SideBar} />
        <div className={classes.content}>
        <div className={classes.row}>
            <Route exact path='/home' component={Filter} />
            <Route exact path='/home' component={Recipes} />
          </div>
        <Route path='/home/favourites' component={Favourites} />
      </div>
      </div>
    </div>
  );
};
Home.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Home);
