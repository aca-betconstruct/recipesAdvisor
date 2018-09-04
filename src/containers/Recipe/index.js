import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Recipe from '../../components/Recipe';
import {
  deleteFetchFavourites,
  fetchFavourites
} from '../../actions/favourites';

const mapStateToProps = state => ({
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchFavourites, deleteFetchFavourites },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
