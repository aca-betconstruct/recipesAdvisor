import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import { firstPage, logoutUser } from '../../actions';

const mapPropsToState = state => {
  return { auth: state.auth };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ firstPage, logoutUser }, dispatch);
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Header);
