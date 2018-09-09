import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class CommentsList extends Component {
  componentDidMount() {
    const { getComments, getAuthenticated, jwt } = this.props;
    getComments();
    getAuthenticated(jwt);
  }
  render() {
    const { comments, url, auth } = this.props;
    const comment = comments.filter(elem => elem.receptId === url);
    return (
      <div style={{ marginTop: '70px' }}>
        <Row>
          <Col md="4" lg="3">
            {!comments.length ? (
              <p>Loading..</p>
            ) : (
              comment.map((elem, index) => {
                const user = auth.filter(el => el.id === elem.creatorId);
                return (
                  <div
                    className="excerpt"
                    style={{ marginTop: '40px', backgroundColor: '#e6ffe6' }}
                    key={index}
                  >
                    <div
                      className="brief"
                      style={{ backgroundColor: ' #ccffcc' }}
                    >
                      {auth === null
                        ? ' '
                        : !user.length
                          ? ''
                          : user.map((el, i) => {
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
              })
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentsList;
