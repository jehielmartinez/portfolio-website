import React from 'react';

import resume from './assets/resume.json';
import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import Skills from './components/Skills';


function App() {
  const {profile, skills} = resume
  return (
    <Container style={{marginTop: 10}}>
      <Row>
        <Col xs={12} md={4}>
          <Profile profile={profile}/>
        </Col>
        <Col xs={12} md={8}>
          <Skills skills={skills}/>
        </Col>
      </Row>
         
    </Container>
  );
}

export default App;
