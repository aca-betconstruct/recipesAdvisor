import { connect } from 'react-redux';
import CommentsList from '../../components/CommentsList';
import { getComments } from '../../actions';
import  {deleteComment} from '../../actions';
import { getAuthenticated } from '../../actions';
import { getMe } from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  comments: state.comments,
  user: state.user,
  users: state.users,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getComments,
      getAuthenticated,
      getMe,
      deleteComment
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
