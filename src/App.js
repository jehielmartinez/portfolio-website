import React from 'react';
import Profile from './components/Profile';
import { Container, Col, Row, Card } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Profile/>
        </Col>
        <Col xs={12} md={8}>
          <Card></Card>
        </Col>
      </Row>
         
    </Container>
  );
}

export default App;
