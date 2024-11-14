import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Right from './Right';
import Left from './Left';
import '../index.css'

export default function Filter() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="p-3 border">
            <Left />
          </Col>
          <Col xs={12} md={9} className="p-3 border">
            <Right />
          </Col>
        </Row>
      </Container>
    </>
  );
}
