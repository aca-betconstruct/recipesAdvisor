import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Col } from 'mdbreact';
import styles from './styles';
import CommentDelete from '../../containers/CommentDelete';

class CommentsList extends Component {
  componentDidMount() {
    const { getComments, getAuthenticated, getMe, jwt, isAuth } = this.props;
    getComments();
    getAuthenticated();
    if (isAuth) {
      getMe(jwt);
    }
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
              {allUsers.map((el, i) => (
                <p
                  className={`font-weight-bold mb-3 ${classes.name}`}
                  key={i + el.firstName}
                >
                  {el.firstName} {el.lastName}
                  {user.id === elem.creatorId ? (
                    <CommentDelete id={elem.id} />
                  ) : (
                    ''
                  )}
                </p>
              ))}
              <p className={classes.comment}>{elem.text}</p>
              <p className={classes.createdAt}>
                {elem.createdAt.slice(0, 10).replace(/-/g, '.')}{' '}
                {elem.createdAt.slice(11, 16)}
              </p>
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
    auth: PropTypes.array,
    isAuth: PropTypes.bool
  };
}

export default injectSheet(styles)(CommentsList);
