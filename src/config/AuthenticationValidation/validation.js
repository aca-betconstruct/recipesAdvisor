const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  } else if (values.firstName && values.firstName.trim().length < 2) {
    errors.firstName = 'Must be 2 characters or more';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  } else if (values.lastName && values.lastName.trim().length < 2) {
    errors.lastName = 'Must be 2 characters or more';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } else if (values.email && values.email.trim().length < 10) {
    errors.email = "You're trying to input spaces? Go Home!";
  }
  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (values.password && values.password.trim().length < 8) {
    errors.password = 'Must be 8 characters or more';
  }
  if(values.password!==values.confirmPassword)
    errors.confirmPassword='Must be equal password'
  return errors;
};

export default validate;
