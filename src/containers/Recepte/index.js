import { connect } from 'react-redux';

import ReceptePage from '../../components/Recepte';
import { fetchComment, fetchpComment } from '../../actions/comment';
import { fetchDitael } from '../../actions/ditael';
import { fetchAuthenticated } from '../../actions/authenticated';
import ditael from '../../reducers/ditael';

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    ditael: state.ditael,
    comments: state.comments,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComment: () => dispatch(fetchComment()),
  fetchpComment: (state, jwt) => dispatch(fetchpComment(state, jwt)),
  fetchDitael: url => dispatch(fetchDitael(url)),
  fetchAuthenticated: jwt => dispatch(fetchAuthenticated(jwt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceptePage);
