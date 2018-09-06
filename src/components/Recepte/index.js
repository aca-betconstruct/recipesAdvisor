import React, { Component, Fragment } from 'react';
import ViewPage from '../ViewPage';
import Header from '../Header';
import { fetchComment } from '../../actions/comment';

class ReceptePage extends Component {

  componentDidMount() {
    const {
      match,
      fetchComment,
      fetchDitael,
      fetchAuthenticated,
      history
    } = this.props;
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      history.push('/login');
    }
    const url = match.url.slice(8);
    fetchComment();
    fetchDitael(url);
    fetchAuthenticated(jwt);
  }
  // componentDidUpdate(prevProps) {
  //   const { match, fetchComment, fetchDitael, ditael } = this.props;
  //   const url = match.url.slice(8);
  //   if (ditael.length !== prevProps.length) {
  //     fetchDitael(url);
  //   }
  // }
  back = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const {
      match,
      ditael,
      comments,
      fetchpComment,
      fetchComment,
      auth
    } = this.props;

    return (
      <div>
        <Header />
        <div style={{ marginTop: '170px' }}>
          {ditael === null ? (
            <p>Loading...</p>
          ) : (
            <ViewPage
              recipe={ditael}
              match={match}
              fetchpComment={fetchpComment}
              back={this.back}
              fetchComment={fetchComment}
              comments={comments}
              auth={auth}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ReceptePage;
