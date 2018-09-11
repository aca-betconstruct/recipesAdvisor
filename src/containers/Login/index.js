import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/Login';
import validate from '../../config/AuthenticationValidation/validation';
import { postLogin, getAuthenticated, logoutUser } from '../../actions';
import { selectIsAuth } from '../../selectors';

const selector = formValueSelector('Login');

const mapStateToProps = state => {
  const { email, password } = selector(state, 'email', 'password');
  return {
    errorlogin: state.errorlogin,
    email,
    password,
    isAuth: selectIsAuth(state),
    jwt: state.jwt
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchLogin: postLogin, fetchAuthenticated: getAuthenticated, logoutUser },
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
