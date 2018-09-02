import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View } from 'mdbreact';
import { Link } from 'react-router-dom';

class WideRecipeCard extends Component {
  render() {
    const { image, label, ingredientLines } = this.props.recipe.recipe;
    return (
      <Row
        style={{
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '1.5rem'
        }}
      >
        <Col md="3">
          <View
            onClick={this.props.onClick}
            hover
            rounded
            className="z-depth-1-half mb-4"
          >
            <img className="img-fluid" src={image} alt="Sample image" />
            <a>
              <Mask overlay="white-slight" className="waves-light" />
            </a>
          </View>
        </Col>
        <Col md="9">
          <p className="font-weight-bold dark-grey-text">{label}</p>
          <div className="d-flex justify-content-between">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a onClick={this.props.onClick} className="dark-grey-text">
                {ingredientLines[0]}
              </a>
            </Col>
            <Link to={'somewhere'} style={{ color: 'black' }}>
              <Fa icon="angle-double-right" />
            </Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default WideRecipeCard;
