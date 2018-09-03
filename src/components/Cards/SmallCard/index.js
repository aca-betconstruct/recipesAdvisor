import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View } from 'mdbreact';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import styles from './styles';

class SmallCard extends Component {
  render() {
    const { classes, recipe } = this.props;
    return (
      <Row className={classes.row}>
        <Col md="3" className={classes.imgCol}>
          <View hover rounded className={`z-depth-1-half mb-4 ${classes.view}`}>
            <img className="img-fluid" src={recipe.image} alt="Sample image" />
            <a>
              <Mask overlay="white-slight" className="waves-light" />
            </a>
          </View>
        </Col>
        <div className={classes.descriptionCol}>
          <p
            className={`${classes.description} font-weight-bold dark-grey-text`}
          >
            Time: {recipe.time} min.
          </p>
        </div>
      </Row>
    );
  }
}

export default injectSheet(styles)(SmallCard);
