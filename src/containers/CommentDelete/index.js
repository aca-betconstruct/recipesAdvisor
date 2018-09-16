import { connect } from 'react-redux';
import  {deleteComment} from '../../actions';
import { bindActionCreators } from 'redux';
import CommentDelete from '../../components/CommentDelete';

const mapStateToProps = state => ({
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteComment
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDelete);
