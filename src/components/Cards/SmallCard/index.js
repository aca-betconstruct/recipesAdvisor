import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View } from 'mdbreact';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import styles from './styles';

class SmallCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Row className={classes.row}>
        <Col md="3">
          <View hover rounded className="z-depth-1-half mb-4">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
              alt="Sample image"
            />
            <a>
              <Mask overlay="white-slight" className="waves-light" />
            </a>
          </View>
        </Col>
        <Col md="9">
          <p className="font-weight-bold dark-grey-text">25/02/2018</p>
          <div className="d-flex justify-content-between">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="dark-grey-text">
                Itaque earum rerum hic tenetur a sapiente delectus
              </a>
            </Col>
            <Link to={'somewhere'}>
              <Fa icon="angle-double-right" className={classes.link} />
            </Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default injectSheet(styles)(SmallCard);
