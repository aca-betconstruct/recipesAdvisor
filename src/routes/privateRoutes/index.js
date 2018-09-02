import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
        componentDidMount() {
            const jwt = localStorage.getItem('jwt');
            console.log(!jwt);
            const { fetchAuthenticated } = this.props;
            fetchAuthenticated(jwt);
        }

  render() {
    let { component: Component, ...rest } = this.props;
    const {auth} = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
