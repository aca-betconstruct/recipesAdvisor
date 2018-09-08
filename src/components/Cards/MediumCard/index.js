import React, { Component } from 'react';
import { Row, Col, Mask, Fa, View } from 'mdbreact';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';

import styles from './styles';

class WideRecipeCard extends Component {
  render() {
    const { classes, recipe } = this.props;
    const { image, label, ingredientLines, uri } = recipe;
    return (
      <Row className={classes.row}>
        <Col className={classes.imageWrapper}>
          <View
            onClick={this.props.onClick}
            hover
            rounded
            className={`${classes.view} z-depth-1-half mb-4`}
          >
            <img className="img-fluid" src={image} alt={label} />
            <a>
              <Mask overlay="white-slight" className="waves-light" />
            </a>
          </View>
        </Col>
        <Col className={classes.description}>
          <a
            onClick={this.props.onClick}
            className="font-weight-bold dark-grey-text"
          >
            {label}
          </a>
          <div className="d-flex justify-content-between">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a onClick={this.props.onClick} className="dark-grey-text">
                {ingredientLines[0]}
              </a>
            </Col>
            <Link
              to={{ pathname: `/detail/${uri.slice(44)}` }}
              style={{ color: 'black' }}
            >
              <Fa icon="angle-double-right" />
            </Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default injectSheet(styles)(WideRecipeCard);
