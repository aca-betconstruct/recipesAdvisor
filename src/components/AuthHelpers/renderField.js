import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from '../SignUp/styles';

const renderField = ({
  input,
  type,
  label,
  meta: { touched, error },
  classes,
  placeholder
}) => {
  return (
    <div>
      <input
        className={classes.text}
        {...input}
        type={type}
        placeholder={placeholder}
        margin="normal"
      />
      <div style={{ color: 'red' }}>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  );
};
renderField.propTypes = {
  classes: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
export default injectSheet(styles)(renderField);
