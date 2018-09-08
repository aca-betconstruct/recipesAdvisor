import { connect } from 'react-redux';

import BigCard from '../../../components/Cards/BigCard';
import {
  checkFavourite,
  deleteFetchFavourites,
  postFavourite
} from '../../../actions';
import { selectIsAuth } from '../../../selectors';

const mapStateToProps = state => ({
  jwt: state.jwt,
  isAuth: selectIsAuth(state)
});

const mapDispatchToProps = dispatch => ({
  checkFavourite: id => dispatch(checkFavourite(id)),
  fetchFavourites: (state, jwt) => dispatch(postFavourite(state, jwt)),
  deleteFetchFavourites: (id, jwt) => dispatch(deleteFetchFavourites(id, jwt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigCard);
