import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from 'mdbreact';
import injectSheet from 'react-jss';
import testImage from './testImage.jpg';

import styles from './styles';

class RecipeCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Col lg="2" md="2" className={`${classes.cardWrapper}  mb-4`}>
        <Card style={{ minWidth: '100%' }}>
          <CardImage
            style={{ height: '250px', width: '100%' }}
            className="img-fluid"
            src={testImage}
            waves
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default injectSheet(styles)(RecipeCard);
