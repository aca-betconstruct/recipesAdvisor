import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Mask,
  Fa,
  View,
  Badge
} from 'mdbreact';


import SmallCard from '../Cards/SmallCard';
import BigCard from '../Cards/BigCard';

const MagazinePage = () => {
  const newsStyle = {
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '1.5rem'
  };
  return (
    <Container style={{ maxWidth: '80%' }}>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">
        Section title
      </h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit id laborum.
      </p>
      <Row>
        <Col md="12" lg="6">
          <BigCard />
        </Col>

        <Col md="12" lg="6">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Col>
      </Row>
    </Container>
  );
};

export default MagazinePage;
