import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AuthenticatedComponent extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    console.log(!jwt)
    const { fetchAuthenticated, history } = this.props;
    fetchAuthenticated(jwt);
  }


  render() {
    const { auth } = this.props;
    if (auth === undefined) {
      return <div>
          <h1>Loading...</h1>
        </div>;
    }

    return (
      <div>
        {this.props.children}

        <div>
          <button onClick={this.logout}>log out</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthenticatedComponent);
