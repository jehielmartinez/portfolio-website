import React, { Component } from 'react'

import { Container, Col, Row} from 'react-bootstrap';

import Profile from './components/Profile';
import Skills from './components/Skills';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Twitter from './components/Twitter.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';

import ReactGA from 'react-ga';

import Footer from './components/Footer.js';
import DowloadButton from './components/DownloadButton';
import resume from './assets/resume.json';

export default class App extends Component {
  state = {
    resume
  }

  render() {
    ReactGA.initialize('UA-145700530-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    const {profile, education, experience, projects, about, skills} = this.state.resume
    return (
      <div>
      <Container style={{marginTop: 15}}>
        <Row>
          <Col xs={12} md={4}>
            <Profile profile={profile}/>
            <Skills skills={skills}/>
            <Twitter account={profile.twitter}/>
            <DowloadButton profileID={profile._id}/>
          </Col>
          <Col xs={12} md={8}>
            <About about={about}/>
            <Projects projects={projects}/>
            <Experience experience={experience}/>
            <Education education={education}/>
          </Col>
        </Row>
    </Container>
    <Footer/>
    </div>
    )
  }
}

