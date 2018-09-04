import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import Recipe from '../../containers/Recipe';
import styles from './styles';

class Favourites extends Component {
  componentDidMount() {
    const { getFetchFavourites, history, jwt } = this.props;
    if (!jwt) {
      history.push('/login');
    }
    getFetchFavourites(jwt);
  }

  componentDidUpdate(prevProps) {
    const { allFetchFavourites, getFetchFavourites, jwt } = this.props;
    if (allFetchFavourites.length !== prevProps.allFetchFavourites.length) {
      getFetchFavourites(jwt);
    }
  }

  render() {
    const { classes, allFetchFavourites, isFavouritesFetching } = this.props;
    return isFavouritesFetching ? (
      <Loader />
    ) : (
      <div className={classes.favourites}>
        {allFetchFavourites.map((recipe, index) => (
          <Recipe
            recipe={recipe.recepte}
            index={index}
            key={recipe.recepte.url}
            isFavourite={true}
          />
        ))}
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    favourites: PropTypes.array,
    allFetchFavourites: PropTypes.array,
    isFavouritesFetching: PropTypes.bool
  };
}

export default injectSheet(styles)(Favourites);
