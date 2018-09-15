import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../../components/Notification';

import { getRecipesForNotification } from '../../actions';
const mapStateToProps = state => {
  return {
    notification: state.notification,
    isNotificationFetching: state.isNotificationFetching};
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getRecipesForNotification }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
