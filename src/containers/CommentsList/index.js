import { connect } from 'react-redux';
import CommentsList from '../../components/CommentsList';
import { getComments } from '../../actions';
import { getMe } from '../../actions';
import { getAuthenticated } from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  comments: state.comments,
  auth: state.users,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getComments,
      getMe,
      getAuthenticated
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
