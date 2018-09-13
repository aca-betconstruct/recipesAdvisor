import { connect } from 'react-redux';

import ErrorPage from '../../components/ErrorPage';
import { selectIsAuth } from '../../selectors';

const mapStateToProps = state => ({
  isAuth: selectIsAuth(state)
});

export default connect(mapStateToProps)(ErrorPage);
