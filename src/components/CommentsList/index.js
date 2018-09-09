import React, { Component } from 'react';
import { Row, Col } from 'mdbreact';

class CommentsList extends Component {
  componentDidMount() {
    const { getComments, getAuthenticated, jwt } = this.props;
    getComments();
    getAuthenticated(jwt);
  }
  render() {
    const { comments, url, auth } = this.props;
    return (
      <div style={{ marginTop: '70px' }}>
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
                  <div
                    className="excerpt"
                    style={{ marginTop: '40px', backgroundColor: '#e6ffe6' }}
                  >
                    <div
                      className="brief"
                      style={{ backgroundColor: ' #ccffcc' }}
                    >
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
}

export default CommentsList;
