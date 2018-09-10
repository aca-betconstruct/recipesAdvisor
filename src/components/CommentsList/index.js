import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Row, Col } from 'mdbreact';
import styles from './styles';

class CommentsList extends Component {
  componentDidMount() {
    const { getComments, getAuthenticated, jwt } = this.props;
    getComments();
    getAuthenticated(jwt);
  }

  render() {
    const { classes, comments, url, auth } = this.props;
    const comment = comments.filter(elem => elem.receptId === url);
    return (
      <div className={classes.main}>
        <Row>
          <Col md="4" lg="3">
            {comment.map((elem, index) => {
              const user = auth.filter(el => el.id === elem.creatorId);
              return (
                <div className={classes.excerpt} key={index}>
                  <div className={classes.brief}>
                    {user.map((el, i) => {
                      return (
                        <p
                          className="font-weight-bold mb-3"
                          key={i + el.firstName}
                        >
                          {el.firstName} {el.lastName}
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <div className="added-text">{elem.text}</div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
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
