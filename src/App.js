import React from 'react';

import resume from './assets/resume.json';
import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import Skills from './components/Skills';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Twitter from './components/Twitter.js';


function App() {
  const {profile, skills, about, experience} = resume
  return (
      <Container style={{marginTop: 15}}>
      <Row>
        <Col xs={12} md={4}>
          <Profile profile={profile}/>
          <Twitter/>
        </Col>
        <Col xs={12} md={8}>
          <About about={about}/>
          <Experience experience={experience}/>
          <Skills skills={skills}/>
        </Col>
      </Row>
         
    </Container>
  );
}

export default App;
