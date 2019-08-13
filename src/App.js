import React from 'react';

import resume from './assets/resume.json';
import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import Skills from './components/Skills';
import About from './components/About.js';


function App() {
  const {profile, skills, about} = resume
  return (
      <Container style={{marginTop: 10}}>
      <Row>
        <Col xs={12} md={4}>
          <Profile profile={profile}/>
        </Col>
        <Col xs={12} md={8}>
          <About about={about}/>
          <Skills skills={skills}/>
        </Col>
      </Row>
         
    </Container>
  );
}

export default App;
