import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import { firstPage } from '../../actions';

const mapPropsToState=state=>{
  return {auth:state.auth}
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ firstPage }, dispatch);
};

export default connect(
    mapPropsToState,
  mapDispatchToProps
)(Header);
