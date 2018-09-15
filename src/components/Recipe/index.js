import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Detail from '../Detail';
import Header from '../../containers/Header';

import styles from './styles';

class Recipe extends Component {
  componentDidMount() {
    const { match, getDetail } = this.props;
    const url = match.url.slice(8);
    getDetail(url);
  }

  render() {
    const { match, detail, history, classes } = this.props;

    return (
      <Fragment>
        <Header location={this.props.location} />
        <div className={classes.wrapper}>
          {detail === null ? (
            <p className={classes.loading}>Loading...</p>
          ) : (
            <Detail history={history} recipe={detail} match={match} />
          )}
        </div>
      </Fragment>
    );
  }
  static propTypes = {
    detail: PropTypes.object,
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Recipe);
