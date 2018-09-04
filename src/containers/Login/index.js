import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/Login';
import validate from '../../config/AuthenticationValidation/validation';
import { fetchLogin,fetchAuthenticated, logoutUser } from '../../actions';

const selector = formValueSelector('Login');

const mapStateToProps = state => {
  const { email, password } = selector(state, 'email', 'password');
  return {
    email,
    password,
    auth: state.auth,
    jwt: state.jwt
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchLogin, fetchAuthenticated, logoutUser },
    dispatch
  );
};

let LoginForm = reduxForm({
  form: 'Login',
  validate
})(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
