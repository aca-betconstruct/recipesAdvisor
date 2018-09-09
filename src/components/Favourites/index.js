import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import SideBar from '../SideBar';
import Recipes from '../../containers/Recipes';
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
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <SideBar />
        <div className={classes.favourites}>
          <div className={classes.name}>
            <h1>Favourites</h1>
          </div>
          <Recipes type={'favourite'} />
        </div>
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
