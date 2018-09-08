import { connect } from 'react-redux';
import {
  deletePreference,
  getPreferences,
  postPreference
} from '../../actions';
import FoodList from '../../components/FoodList';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
    isPreferencesFetching: state.isPreferencesFetching,
    jwt: state.jwt
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { deletePreference, getPreferences, fetchPreferences: postPreference },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
