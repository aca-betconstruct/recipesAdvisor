import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Footer } from 'mdbreact';
class FooterPage extends Component {
  render() {
    return (
      <Footer
        className="font-small pt-4 mt-4 "
        style={{ backgroundColor: 'black' }}
      >
        <Container>
          <Row
            className="text-center text-md-left mt-5 pb-4"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Col md="3" lg="3" xl="3" className="mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold light-green-text">
                Recipes Advisor
              </h6>
              <p>
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>
            <hr
              className="w-100 clearfix d-md-none"
              style={{ marginLeft: '1260px' }}
            />
            <Col md="2" lg="2" xl="2" className="mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <Link to="/aboutus">About Us</Link>
              </p>
              <p>
                <Link to="/contactus">Contact Us</Link>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col
              md="4"
              lg="3"
              xl="3"
              className="mt-3"
              style={{ marginRight: '-35px' }}
            >
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg="3" style={{ display: 'flex', flexWrap: 'nowrap' }}>
              <p className="float-xl-right">
                &copy; {new Date().getFullYear()} Copyright:
                <a href="https://acafoodapi.haffollc.com"> Recipes Advisor </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
