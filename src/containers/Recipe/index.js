import { connect } from 'react-redux';
import Recipe from '../../components/Recipe';
import { getDetail } from '../../actions';

const mapStateToProps = state => {
  return {
    detail: state.detail,
    auth: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  getDetail: url => dispatch(getDetail(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
