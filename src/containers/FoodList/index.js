import { connect } from 'react-redux';
import {
  addPreference,
  removePreference,
  deletePreference,
  getPreferences,
  fetchPreferences
} from '../../actions';
import FoodList from '../../components/FoodList';
import { bindActionCreators } from 'redux';
import { isPreferencesFetching } from '../../reducers/preferences';

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
    isPreferencesFetching: state.isPreferencesFetching
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { deletePreference, getPreferences, fetchPreferences },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
