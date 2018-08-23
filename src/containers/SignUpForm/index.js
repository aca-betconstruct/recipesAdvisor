import { reduxForm } from 'redux-form';
import SignUp from '../../components/SignUpForm/index';
import validate from '../../config/SignUpValidation/validtion';

let SignUpForm = reduxForm({
  form: 'SignUp',
  validate
})(SignUp);

export default SignUpForm;
