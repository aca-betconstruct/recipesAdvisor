import PrivateRoute from '../../routes/privateRoutes';
import { connect } from 'react-redux';
import {selectIsAuth} from '../../selectors'

const mapStateToProps = state => {
  return {
    isAuth: selectIsAuth(state)
  };
};
export default connect(mapStateToProps)(PrivateRoute);
