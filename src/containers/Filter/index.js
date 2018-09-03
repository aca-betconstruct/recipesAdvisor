import { connect } from 'react-redux';
import {
  addHealthLabel,
  addDietLabel,
  removeLabel,
  getRecipes,
  firstPage
} from '../../actions';
import Filter from '../../components/Filter';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    filter: state.filter,
    curPage: state.curPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addHealthLabel,
      addDietLabel,
      removeLabel,
      getRecipes,
      firstPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
