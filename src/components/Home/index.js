import React from 'react';
import { Route } from 'react-router-dom';
import { urlToProperty } from 'query-string-params';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import AnimatableImages from '../../components/AnimatableImages';
import Recipes from '../../containers/Recipes';
import FilteredRecipe from '../../containers/FilteredRecipe';
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
        <Route
          path="/home/search"
          render={({ location }) => (
            <FilteredRecipe
              q={
                urlToProperty(location.search).q
                  ? urlToProperty(location.search).q[0]
                  : ''
              }
            />
          )}
        />
        <Route path={'/home/favourites'} component={() => <Favourites />} />
      </div>
    </div>
  );
};
Home.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(Home);
