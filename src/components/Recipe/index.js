import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewPage from '../Detail';
import Header from '../../containers/Header';

class ReceptePage extends Component {
  componentDidMount() {
    const {
      match,
      fetchComment,
      fetchDitael,
      fetchAuthenticated,
      jwt
    } = this.props;
    const url = match.url.slice(8);
    fetchComment();
    fetchDitael(url);
    fetchAuthenticated(jwt);
  }
  // componentDidUpdate(prevProps) {
  //   const { match, getComments, getDetail, detail } = this.props;
  //   const url = match.url.slice(8);
  //   if (detail.length !== prevProps.length) {
  //     getDetail(url);
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
        <Header location={this.props.location} />
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
