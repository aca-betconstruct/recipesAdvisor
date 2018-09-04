import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFetchFavourites } from '../../actions/favourites';
import Favourites from '../../components/Favourites';

const mapStateToProps = state => ({
  allFetchFavourites: state.allFetchFavourites,
  isFavouritesFetching: state.isFavouriteRecipesFetching
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFetchFavourites }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
