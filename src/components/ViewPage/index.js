import React from 'react';
import { Container, Row, Col, CardImage, View, Fa } from 'mdbreact';
import PropTypes from 'prop-types';

const ViewPage = ({ match, recipe }) => {
  let url = match.url.slice(11);

  if (url !== recipe.uri.slice(44)) {
    return '';
  }

  return (
    <Container>
      <Row>
        <Col md="4">
          <View zoom>
            <CardImage
              cascade
              top
              src={recipe.image}
              alt="sample photo"
              hover
              overlay="white-slight"
            />
          </View>
        </Col>
        <Col lg="7" md="7">
          <Row className="mb-5">
            <Col xl="10" md="11" size="10">
              <a className="green-text">
                <h2 className="font-weight-bold mb-3">
                  <Fa icon="cutlery" className="pr-2" />
                  {recipe.label}
                </h2>
              </a>

              <Row>
                <Col>
                  <h4 className="font-weight-bold black-text">Ingredients:</h4>
                  {recipe.ingredientLines.map((elem, i) => {
                    return (
                      <h4 key={i}>
                        <strong>{elem}</strong>
                      </h4>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
ViewPage.propTypes = {
  match: PropTypes.object,
  recipe: PropTypes.object.isRequired
};

export default ViewPage;
