import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';

class Results extends Component {
  render() {
    const { classes, assignResults } = this.props;

    return (
      <div className={classes.calories}>
        {assignResults.isReady ? (
          <div>
            <h4>your amount of daily calories is {assignResults.calories}</h4>
            <h4>
              if you want to loose weight, do not consume more than{' '}
              {assignResults.wls}
            </h4>
          </div>
        ) : (
          <h4>
            If you want to show calculator results please calculate your
            calories!
          </h4>
        )}
      </div>
    );
  }
  static PropTypes = {
    assignResults: PropTypes.object
  };
}

export default injectSheet(styles)(Results);
