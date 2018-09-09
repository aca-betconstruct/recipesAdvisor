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
    return (
      <div className={classes.main}>
        <Row>
          <Col md="4" lg="3">
            {!comments.length ? (
              <p>Loading..</p>
            ) : (
              comments.map((elem, i) => {
                if (url !== elem.receptId) {
                  return '';
                }
                return (
                  <div className={classes.excerpt}>
                    <div className={classes.brief}>
                      {auth === null ? (
                        <p>Loading ...</p>
                      ) : (
                        auth.map((el, i) => {
                          if (el.id !== elem.creatorId) {
                            return '';
                          }
                          return (
                            <p
                              className="font-weight-bold mb-3"
                              key={i + el.firstName}
                            >
                              {el.firstName} {el.lastName}
                            </p>
                          );
                        })
                      )}
                    </div>
                    <div>
                      <div className="added-text">{elem.text}</div>
                    </div>
                  </div>
                );
              })
            )}
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
