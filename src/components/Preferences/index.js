import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import FoodPreferences from '../FoodPreferences';

const Preferences = ({ classes }) => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Recipes Adviser</h1>
      <FoodPreferences />
    </div>
  );
};
Preferences.propTypes = {
  classes: PropTypes.object
};
export default injectSheet(styles)(Preferences);
