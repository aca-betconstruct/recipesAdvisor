import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmallCard from './SmallCard';
import Card from './Card';
import AnimatedCard from './AnimatedCard';
import injectSheet from 'react-jss';
import styles from './styles';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
  }

  static propTypes = {
    recipe: PropTypes.object.isRequired,
    classes: PropTypes.object,
    addToFavourites: PropTypes.func,
    removeFromFavourites: PropTypes.func,
    favouriteRecipe: PropTypes.func,
    q: PropTypes.string,
    index: PropTypes.number,
    type: PropTypes.string
  };

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
      history.push('/Login');
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
    const { recipe, classes } = this.props;
    const { isFavourite } = recipe;
    return <SmallCard />;
  }
}

export default injectSheet(styles)(Recipe);
