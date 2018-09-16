import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentDelete extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { deleteComment, id, jwt } = this.props;
    deleteComment(id, jwt);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <i className="fa fa-close" aria-hidden="true" />
        </button>
      </div>
    );
  }
  static propTypes = {
    id: PropTypes.number,
    jwt: PropTypes.string,
    deleteComment: PropTypes.func
  };
}

export default CommentDelete;
