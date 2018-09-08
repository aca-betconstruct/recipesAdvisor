import { connect } from 'react-redux';
import CommentsList from '../../components/CommentsList'
import {getComments} from "../../actions/comment";
import {getAuthenticated} from '../../actions/authenticated'

const mapStateToProps = state => ({
    comments: state.comments,
    auth: state.user,
    jwt:state.jwt
});

const mapDispatchToProps = dispatch => ({
    getComments: () => dispatch(getComments()),
    getAuthenticated: (jwt)=>dispatch(getAuthenticated(jwt))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsList);