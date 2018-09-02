import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Fa,
  Button,
  Input
} from 'mdbreact';

import MapContainer from '../GoogleMap';

class ContactPage extends Component {
  render() {
    return (
      <Container style={{ marginTop: '120px' }} className="responsive">
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5 light-green-text">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <Row>
            <Col lg="5" className="lg-0 mb-4">
              <Card>
                <CardBody>
                  <div className="form-header accent-1">
                    <h3 className="mt-2 light-green-text ">
                      <Fa icon="envelope" /> Write to us:
                    </h3>
                  </div>
                  <p className="dark-grey-text">
                    We'll write rarely, but only the best content.
                  </p>
                  <div className="md-form">
                    <Input
                      icon="user"
                      label="Your name"
                      iconClass="grey-text"
                      type="text"
                      id="form-name"
                    />
                  </div>
                  <div className="md-form">
                    <Input
                      icon="envelope"
                      label="Your email"
                      iconClass="grey-text"
                      type="text"
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <Input
                      icon="tag"
                      label="Subject"
                      iconClass="grey-text"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <Input
                      icon="pencil"
                      label="Icon Prefix"
                      iconClass="grey-text"
                      type="textarea"
                      id="form-text"
                    />
                  </div>
                  <div className="text-center">
                    <Button color="light-green">Submit</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="7">
              <div id="map-container" className="rounded z-depth-1-half map-container" style={{height: '400px'}}>
                <MapContainer />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default ContactPage;
