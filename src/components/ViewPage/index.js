import React, { Component } from 'react';
import { Container, Row, Col, CardImage, View, Fa, CardBody } from 'mdbreact';
import CommentPage from '../Comments';
import './style.css';

class ViewPage extends Component {
  render() {
    const {
      match,
      recipe,
      comments,
      auth,
      fetchpComment,
      fetchComment
    } = this.props;
    const url = match.url.slice(8);

    return (
      <Container>
        <Row>
          <Col>
            <button onClick={this.props.back} className="ditael-back">
              <i
                className="fa fa-arrow-left green-text fa-2x"
                aria-hidden="true"
              />
            </button>
          </Col>
          <Col md="5">
            <View zoom>
              <CardImage
                cascade
                top
                src={recipe.image}
                alt="sample photo"
                top
                hover
                overlay="white-slight"
              />
            </View>
          </Col>
          <Col lg="5" md="5">
            <Row className="mb-5">
              <Col xl="10" md="11" size="10">
                <a className="green-text">
                  <h2 className="font-weight-bold mb-3">
                    <Fa icon="cutlery" className="pr-2" />
                    {recipe.label}
                  </h2>
                </a>
                <Row>
                  <div className="tableditael">
                    <Col>
                      <h3 className="font-weight-bold black-text">
                        Ingredients
                      </h3>
                      {recipe.ingredientLines.map((elem, i) => {
                        return (
                          <h5 key={i}>
                            <strong h1-responsive text-center my-5>
                              {elem}
                            </strong>
                          </h5>
                        );
                      })}
                    </Col>
                  </div>
                </Row>
                <div className="tableditael">
                  <div>
                    <h3 className="font-weight-bold black-text">Calories</h3>
                    <strong h1-responsive text-center my-5>
                      {Math.ceil(recipe.calories)}
                    </strong>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <h3 className="font-weight-bold black-text " lg="3" md="3">
                      Total weight
                    </h3>
                    <strong h1-responsive text-center my-5>
                      {Math.ceil(recipe.totalWeight)}
                    </strong>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <CommentPage
          fetchpComment={fetchpComment}
          url={url}
          fetchComment={fetchComment}
          comments={comments}
          auth={auth}
        />
      </Container>
    );
  }
}

export default ViewPage;
