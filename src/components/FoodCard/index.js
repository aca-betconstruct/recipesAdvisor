import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

class FoodCard extends Component {
  handleClick = () => {
    const { deletePreference, foodObj, jwt } = this.props;
    deletePreference(foodObj.id, jwt);
  };

  render() {
    const { classes, foodObj } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.text}>{foodObj.text}</div>
        <div className={classes.removeButContainer} onClick={this.handleClick}>
          <div className={classes.removeBut}>+</div>
        </div>
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    foodObj: PropTypes.object,
    deletePreference: PropTypes.func
  };
}

export default injectSheet(styles)(FoodCard);
