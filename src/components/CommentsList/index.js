import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Col } from 'mdbreact';
import styles from './styles';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { getComments, getAuthenticated, getMe, jwt } = this.props;
    getComments();
    getAuthenticated();
    getMe(jwt);
  }
  handleClick(id) {
    const { deleteComment, jwt } = this.props;
    deleteComment(id, jwt);
  }

  render() {
    const { classes, comments, url, users, user } = this.props;
    const comment = comments.filter(elem => elem.receptId === url);
    return (
      <Col className={classes.main}>
        {comment.map((elem, index) => {
          const allUsers = users.filter(el => el.id === elem.creatorId);
          return (
            <div className={classes.excerpt} key={index}>
              <div className={classes.brief}>
                {allUsers.map((el, i) => {
                  return (
                    <p
                      className={`font-weight-bold mb-3 ${classes.name}`}
                      key={i + el.firstName}
                    >
                      {el.firstName} {el.lastName}
                    </p>
                  );
                })}
              </div>
              <div className={classes.comment}>
                {elem.text}

                <span>{elem.createdAt}</span>
              </div>
            </div>
          );
        })}
      </Col>
    );
  }
  static propTypes = {
    getComments: PropTypes.func,
    getAuthenticated: PropTypes.func,
    jwt: PropTypes.string,
    comments: PropTypes.array,
    url: PropTypes.string,
    auth: PropTypes.array
  };
}

export default injectSheet(styles)(CommentsList);
