import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Col } from 'mdbreact';
import styles from './styles';

class CommentsList extends Component {
  componentDidMount() {
    const { getComments, getMe, getAuthenticated, jwt } = this.props;
    getComments();
    getMe(jwt);
    getAuthenticated(jwt);
  }

  render() {
    const { classes, comments, url, auth } = this.props;
    const comment = comments.filter(elem => elem.receptId === url);
    return (
      <Col className={classes.main}>
        {comment.map((elem, index) => {
          const user = auth.filter(el => el.id === elem.creatorId);
          return (
            <div className={classes.excerpt} key={index}>
              <div className={classes.brief}>
                {user.map((el, i) => {
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
              <div className={classes.comment}>{elem.text}</div>
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
