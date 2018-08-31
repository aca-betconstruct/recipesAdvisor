import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View } from 'mdbreact';

class SmallCard extends Component {
  render() {
    const newsStyle = {
      borderBottom: '1px solid #e0e0e0',
      marginBottom: '1.5rem'
    };

    return (
            <Row>
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
                  <a>
                    <Fa icon="angle-double-right" />
                  </a>
                </div>
              </Col>
            </Row>
         
    );
  }
}

export default SmallCard;
