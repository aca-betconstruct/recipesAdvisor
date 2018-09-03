import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {

  render() {
    let { component: Component,auth, ...rest } = this.props;
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
