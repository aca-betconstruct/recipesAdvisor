import { connect } from 'react-redux';
import CalorieResults from '../../components/CalorieResults';

const mapStateToProps = state => {
  return {
    assignResults: state.assignResults
  };
};

export default connect(mapStateToProps)(CalorieResults);
