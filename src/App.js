import React from 'react';

import resume from './assets/resume.json';
import { Container, Col, Row } from 'react-bootstrap';

import Profile from './components/Profile';
import Skills from './components/Skills';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Twitter from './components/Twitter.js';
import Projects from './components/Projects.js';
import Books from './components/Books.js';
import Education from './components/Education.js';

import ReactGA from 'react-ga';

function App() {
  const {profile, skills, about, experience, projects, books, education} = resume
  ReactGA.initialize('UA-139384535-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
      <Container style={{marginTop: 15}}>
      <Row>
        <Col xs={12} md={4}>
          <Profile profile={profile}/>
          <Twitter/>
          <Books books={books}/>
        </Col>
        <Col xs={12} md={8}>
          <About about={about}/>
          <Experience experience={experience}/>
          <Education education={education}/>
          <Projects projects={projects}/>
          <Skills skills={skills}/>
        </Col>
      </Row>
         
    </Container>
  );
}

export default App;
