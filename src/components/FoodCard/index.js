import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

class FoodCard extends Component {
  handleClick = () => this.props.deletePreference(this.props.foodObj.id);

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
}

export default injectSheet(styles)(FoodCard);
