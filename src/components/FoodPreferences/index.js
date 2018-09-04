import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';
import { Link } from 'react-router-dom';

import FoodList from '../../containers/FoodList';

const FoodPreferences = ({ classes }) => {
  return (
    <div className={classes.listsContainer}>
      <div className={classes.list}>
        <h2 className={classes.listTitle}>Preffered Products</h2>
        <FoodList inputPlaceholder="Food you prefer" type />
      </div>
      <div className={classes.list}>
        <h2 className={classes.listTitle}>Products to Avoid</h2>
        <FoodList inputPlaceholder="Food you dont like" type={false} />
      </div>
      <Link to="home" className={classes.button}>
        Show Recipes
      </Link>
    </div>
  );
};
FoodPreferences.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(FoodPreferences);
