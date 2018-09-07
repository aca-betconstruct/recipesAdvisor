import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIsAuth } from '../../selectors';

import Header from '../../components/Header';
import { logoutUser } from '../../actions';

const mapPropsToState = state => {
  return { isAuth: selectIsAuth(state) };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Header);
