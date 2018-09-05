import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFetchFavourites } from '../../actions';
import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  allFetchFavourites: state.allFetchFavourites,
  isFavouritesFetching: state.isFavouriteRecipesFetching,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFetchFavourites }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
