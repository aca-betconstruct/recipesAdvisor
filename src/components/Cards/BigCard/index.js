import React from 'react';
import { View, Mask, Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import styles from './styles';

const BigCard = ({ classes, recipe }) => {
  const { image, label, calories, totalWeight, totalTime } = recipe;
  return (
    <div>
      <View hover rounded className={`z-depth-1-half mb-4 ${classes.view}`}>
        <img className="img-fluid" src={image} alt="Sample image" />
        <a>
          <Mask overlay="white-slight" className="waves-light" />
        </a>
      </View>
      <div className="d-flex justify-content-between">
        <a className="deep-orange-text">
          <h6 className="font-weight-bold">
            <Fa icon="cutlery" className="pr-2" />
            Culinary
          </h6>
        </a>
        <p className="font-weight-bold dark-grey-text">
          <Fa icon="clock-o" className="pr-2" />
          27/02/2018
        </p>
      </div>
      <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
        <Link to={'somewhere'} style={{ color: 'black' }}>
          {label}
        </Link>
      </h3>
      <div
        className={`dark-grey-text mb-lg-0 mb-md-5 mb-4 ${classes.ingredients}`}
      >
        <p>Calories: {Number.parseInt(calories, 10)} kcal.</p>
        <p>Weight: {Number.parseInt(totalWeight, 10)} g.</p>
        <p>Time: {totalTime} min.</p>
        {/*{ingredientLines.map(item => (*/}
        {/*<p>{item}</p>*/}
        {/*))}*/}
      </div>
    </div>
  );
};
BigCard.propTypes = {
  classes: PropTypes.object,
  recipe: PropTypes.object
};
export default injectSheet(styles)(BigCard);
