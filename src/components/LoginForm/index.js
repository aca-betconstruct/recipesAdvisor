import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import renderField from '../AuthHelpers/renderField';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { fetchLogin } = this.props;
    const { email, password } = this.props;
    fetchLogin(
      {
        email: email,
        password: password
      },
      this.props.history.push('/')
    );
    console.log({
      email: email,
      password: password
    });
  }

  render() {
    localStorage.clear();
    const { classes, valid } = this.props;
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

export default injectSheet(styles)(Login);
