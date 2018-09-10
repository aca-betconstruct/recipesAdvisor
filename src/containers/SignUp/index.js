import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../components/SignUp/index';
import { postSignUp } from '../../actions';
import validate from '../../config/AuthenticationValidation/validation';

const selector = formValueSelector('SignUp');

const mapStateToProps = state => {
  const { firstName, lastName, email, password, confirmPassword } = selector(
    state,
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword'
  );
  return {
    signUpError: state.signUpError,
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchSignup: postSignUp }, dispatch);
};

let SignUpForm = reduxForm({
  form: 'SignUp',
  validate
})(SignUp);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
