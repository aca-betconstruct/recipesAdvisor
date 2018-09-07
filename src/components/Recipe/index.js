import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Detail from '../Detail';
import Header from '../../containers/Header';

class Recipe extends Component {
  componentDidMount() {
    const {
      match,
      getDetail
    } = this.props;
    const url = match.url.slice(8);
    getDetail(url);
  }



  render() {
    const {
      match,
      detail,history
    } = this.props;

    return (
      <div>
        <Header location={this.props.location} />
        <div style={{ marginTop: '170px' }}>
          {detail === null ? (
            <p>Loading...</p>
          ) : (
            <Detail
                history={history}
              recipe={detail}
              match={match}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Recipe;
