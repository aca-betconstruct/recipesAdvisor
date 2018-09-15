import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Redirect, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles';
import renderField from '../AuthHelpers/renderField';
import { postLogin } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate() {
    const { jwt } = this.props;
    if (jwt) {
      const { getMe } = this.props;
      getMe(jwt);
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const { postLogin } = this.props;
    const { email, password } = this.props;
    postLogin({
      email: email,
      password: password
    });
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/home' }
    };

    if (this.props.isAuth) {
      return <Redirect to={from} />;
    } else {
      const { classes, valid, errorlogin } = this.props;
      return (
        <div>
          <div>
            <div className={classes.wrap}>
              <div className={classes.grids}>
                <div className={classes.contentMain}>
                  <div className={classes.signUpForm}>
                    <h4>Login to start the journey of amazing recipes</h4>
                    <form method="post" onSubmit={this.handleSubmit}>
                      <Field
                        className={classes.text}
                        name="email"
                        component={renderField}
                        type="text"
                        placeholder="Email"
                      />
                      <Field
                        className={classes.password}
                        name="password"
                        component={renderField}
                        type="password"
                        placeholder="Password"
                      />

                      <div className={classes.validate}>
                        {errorlogin == null ? ' ' : <p>{errorlogin}</p>}
                      </div>

                      <button
                        className={classes.button}
                        type="submit"
                        disabled={!valid}
                      >
                        Login
                      </button>
                      <div className={classes.signUpMessage}>
                        Not a member ?
                        <Link to="signup" className={classes.a}>
                          Sign Up
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className={classes.footer}>
                <p>© Recipes Advisor LLC. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  static propTypes = {
    classes: PropTypes.object,
    valid: PropTypes.bool,
    isAuth: PropTypes.bool,
    jwt: PropTypes.string,
    fetchAuthenticated: PropTypes.func
  };
}

export default withRouter(injectSheet(styles)(Login));
