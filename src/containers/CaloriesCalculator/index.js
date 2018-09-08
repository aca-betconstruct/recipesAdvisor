import { connect } from 'react-redux';
import { changeCalories } from '../../actions';
import CaloriesCalculator from '../../components/CaloriesCalculator';

import { bindActionCreators } from 'redux';
import assignResults from "../../reducers/calories";

const mapStateToProps = state => {
  return {
    assignResults: state.assignResults
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeCalories
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaloriesCalculator);
