
import { connect } from 'react-redux';

import Comments from '../../components/Comments'
import { selectIsAuth } from '../../selectors';
import { postComment} from "../../actions/comment";

const mapStateToProps = state => ({
    jwt: state.jwt,
    isAuth: selectIsAuth(state),
    comments: state.comments,

});

const mapDispatchToProps = dispatch => ({
    postComment: (state, jwt) => dispatch(postComment(state, jwt)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);