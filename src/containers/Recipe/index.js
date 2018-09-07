import { connect } from 'react-redux';

import ReceptePage from '../../components/Recipe';
import { getComments, postComment } from '../../actions/comment';
import { getDetail } from '../../actions/detail';
import { getAuthenticated } from '../../actions/authenticated';

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    ditael: state.ditael,
    comments: state.comments,
    auth: state.user,
    jwt: state.jwt
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComment: () => dispatch(getComments()),
  fetchpComment: (state, jwt) => dispatch(postComment(state, jwt)),
  fetchDitael: url => dispatch(getDetail(url)),
  fetchAuthenticated: jwt => dispatch(getAuthenticated(jwt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceptePage);
