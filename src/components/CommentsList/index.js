import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class CommentListPage extends Component {
  render() {
    const { fetchComment, comments, url, auth } = this.props;

    return (
      <div style={{ marginTop: '70px' }}>
        <Row>
          <Col md="4" lg="3">
            {comments === null ? (
              <p>Loading..</p>
            ) : (
              comments.map((elem, i) => {
                if (url !== elem.receptId) {
                  return '';
                }
                return (
                  <div className="excerpt" style={{ marginTop: '40px', backgroundColor:"#e6ffe6" }}>
                    <div className="brief" style={{ backgroundColor:" #ccffcc" }}>
                      {auth === null ? (
                        <p>Loading ...</p>
                      ) : (
                        auth.map((el, i) => {
                          if (el.id !== elem.creatorId) {
                            return '';
                          }
                          return (
                            <p className="font-weight-bold mb-3">
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

export default CommentListPage;
