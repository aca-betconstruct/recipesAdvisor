import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Login from '../../components/LoginForm';
import validate from '../../config/AuthenticationValidation/validation';
import { fetchLogin } from '../../actions/login';
import { fetchAuthenticated ,logoutUser} from '../../actions/authenticated';

const selector = formValueSelector('Login');

const mapStateToProps = state => {
  const { email, password } = selector(state, 'email', 'password');
  return {
    email,
    password,
    auth: state.auth,
      jwt:state.jwt
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLogin: state => dispatch(fetchLogin(state)),
  fetchAuthenticated: (jwt, prop) => dispatch(fetchAuthenticated(jwt, prop)),
  logoutUser:()=>dispatch(logoutUser())
});

let LoginForm = reduxForm({
  form: 'Login',
  validate
})(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
