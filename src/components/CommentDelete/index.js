import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Fa } from 'mdbreact';

import styles from './styles';

class CommentDelete extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { deleteComment, id, jwt } = this.props;
    deleteComment(id, jwt);
  }
  render() {
    const { classes } = this.props;
    return (
      <Fa
        className={classes.closeIcon}
        icon="close"
        onClick={this.handleClick}
      />
    );
  }
  static propTypes = {
    id: PropTypes.number,
    jwt: PropTypes.string,
    deleteComment: PropTypes.func
  };
}

export default injectSheet(styles)(CommentDelete);
