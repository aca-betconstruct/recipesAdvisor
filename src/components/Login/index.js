import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Redirect, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles';
import renderField from '../AuthHelpers/renderField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { fetchAuthenticated, jwt } = this.props;
    fetchAuthenticated(jwt);
  }
  componentDidUpdate(nextProps) {
    const { auth, jwt } = this.props;
    if (jwt && !auth) {
      const { fetchAuthenticated } = this.props;
      fetchAuthenticated(jwt);
    }
    return !auth;
  }
  handleSubmit(event) {
    event.preventDefault();
    const { fetchLogin } = this.props;
    const { email, password } = this.props;
    fetchLogin({
      email: email,
      password: password
    });
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/preferences' }
    };

    if (this.props.auth) {
      return <Redirect to={from} />;
    } else {
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
  static propTypes = {
    classes: PropTypes.object,
    valid: PropTypes.bool,
    auth: PropTypes.object,
    jwt: PropTypes.string,
    fetchAuthenticated: PropTypes.func
  };
}

export default withRouter(injectSheet(styles)(Login));
