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
        <h2 className={classes.listTitle}>Include Ingredients</h2>
        <FoodList inputPlaceholder="Ex. Banana" type />
      </div>
      <div className={classes.list}>
        <h2 className={classes.listTitle}>Exclude Ingredients</h2>
        <FoodList inputPlaceholder="Ex. Cheese" type={false} />
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
