import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavourites } from '../../actions';
import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  allFetchFavourites: state.allFetchFavourites,
  isFavouritesFetching: state.isFavouriteRecipesFetching,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFetchFavourites: getFavourites }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
