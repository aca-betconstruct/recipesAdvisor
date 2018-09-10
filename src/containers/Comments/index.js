import { connect } from 'react-redux';
import Comments from '../../components/Comments';
import { selectIsAuth } from '../../selectors';
import { postComment } from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  jwt: state.jwt,
  isAuth: selectIsAuth(state),
  comments: state.comments
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      postComment
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
