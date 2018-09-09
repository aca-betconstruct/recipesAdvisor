import { connect } from 'react-redux';

import BigCard from '../../../components/Cards/BigCard';
import {
  checkFavourite,
  deleteFetchFavourites,
  postFavourite
} from '../../../actions';
import { selectIsAuth } from '../../../selectors';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  jwt: state.jwt,
  isAuth: selectIsAuth(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      checkFavourite,
      postFavourite,
      deleteFetchFavourites
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigCard);
