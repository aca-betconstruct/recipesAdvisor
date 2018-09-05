import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SmallCard } from '../Cards';
import injectSheet from 'react-jss';
import styles from './styles';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
  }

  handleFavouriteClick(e) {
    e.preventDefault();
    const {
      recipe,
      fetchFavourites,
      deleteFetchFavourites,
      history
    } = this.props;
    const { isFavourite } = recipe;
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      history.push('/login');
    }
    isFavourite
      ? deleteFetchFavourites(recipe.uri.slice(45), jwt)
      : fetchFavourites(
          {
            favoriteId: recipe.uri.slice(45),
            recepte: { ...recipe, isFavourite: true }
          },
          jwt
        );
  }

  render() {
    return <SmallCard />;
  }
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    addToFavourites: PropTypes.func,
    removeFromFavourites: PropTypes.func,
    favouriteRecipe: PropTypes.func,
    q: PropTypes.string,
    index: PropTypes.number,
    type: PropTypes.string
  };
}

export default injectSheet(styles)(Recipe);
