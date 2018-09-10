import React, { Component } from 'react';
import { View, Mask, Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './styles';

class BigCard extends Component {
  constructor(props) {
    super(props);
    this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
  }

  handleFavouriteClick() {
    const {
      checkFavourite,
      postFavourite,
      deleteFetchFavourites,
      jwt,
      recipe,
      isAuth,
      deleteBigCard
    } = this.props;
    if (isAuth) {
      const { isFavourite, uri } = this.props.recipe;
      if (isFavourite) {
        if (deleteBigCard) {
          deleteBigCard();
        }
        deleteFetchFavourites(recipe.uri.slice(45), jwt);
      } else {
        postFavourite(
          {
            favoriteId: recipe.uri.slice(45),
            recepte: { ...recipe, isFavourite: true }
          },
          jwt
        );
      }
      checkFavourite(uri);
    }
  }
  render() {
    const { classes, recipe, isAuth } = this.props;
    const {
      image,
      label,
      calories,
      totalWeight,
      totalTime,
      isFavourite,
      uri
    } = recipe;
    return (
      <div className={classes.card}>
        <View hover rounded className={`z-depth-1-half mb-4 ${classes.view}`}>
          <span
            className={`${classes.iconWrapper} ${
              isFavourite ? classes.favourite : classes.notFavourite
            }`}
          >
            {isAuth ? (
              <Fa
                icon={'heart'}
                className={classes.favIcon}
                onClick={this.handleFavouriteClick}
              />
            ) : (
              <Link to={'/login'}>
                <Fa
                  icon={'heart'}
                  className={classes.favIcon}
                  onClick={this.handleFavouriteClick}
                />
              </Link>
            )}
          </span>
          <img className="img-fluid" src={image} alt={label} />
          <Link to={{ pathname: `/detail/${uri.slice(44)}` }}>
            <Mask overlay="white-slight" className="waves-light" />
          </Link>
        </View>
        <h3
          className={`font-weight-bold dark-grey-text mb-3 p-0 ${
            classes.title
          }`}
        >
          <Link
            to={{ pathname: `/detail/${uri.slice(44)}` }}
            style={{ color: 'black' }}
          >
            {label}
          </Link>
        </h3>
        <div
          className={`${
            classes.description
          } dark-grey-text mb-lg-0 mb-md-5 mb-4`}
        >
          <p>Calories: {Number.parseInt(calories, 10)} kcal.</p>
          <p>Weight: {Number.parseInt(totalWeight, 10)} g.</p>
          {totalTime > 0 ? <p>Time: {totalTime} min.</p> : ''}
        </div>
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    recipe: PropTypes.object
  };
}

export default injectSheet(styles)(BigCard);
