import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View } from 'mdbreact';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import styles from './styles';

class WideRecipeCard extends Component {
  render() {
    const { classes, recipe } = this.props;
    const { image, label, ingredientLines } = recipe.recipe;
    return (
      <Row className={classes.row}>
        <Col md="3">
          <View
            onClick={this.props.onClick}
            hover
            rounded
            className={`${classes.view} z-depth-1-half mb-4`}
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
            <Link to={'somewhere'} className={classes.link}>
              <Fa icon="angle-double-right" />
            </Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default injectSheet(styles)(WideRecipeCard);
