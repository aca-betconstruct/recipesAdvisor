import { fetchAuthenticated } from '../../actions/authenticated';
import PrivateRoute from '../../routes/privateRoutes'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        auth: state.auth,
        jwt: state.jwt
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAuthenticated: (jwt, prop) => dispatch(fetchAuthenticated(jwt, prop)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateRoute);