import PrivateRoute from '../../routes/privateRoutes'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        auth: state.auth,
    };
};
export default connect(
    mapStateToProps,
)(PrivateRoute);