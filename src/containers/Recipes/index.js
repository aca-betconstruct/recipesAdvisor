import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getRecipes,
  firstPage,
  nextPage,
  getPreferences,
  getFavourites
} from '../../actions';
import Recipes from '../../components/Recipes';

const mapStateToProps = state => {
  return {
    isRecipesFetching: state.isRecipesFetching,
    recipes: state.recipes,
    curPage: state.curPage,
    preferences: state.preferences,
    favourites: state.allFetchFavourites,
    jwt: state.jwt
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRecipes,
      firstPage,
      nextPage,
      getPreferences,
      getFetchFavourites: getFavourites
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
