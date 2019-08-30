import React, { Component } from 'react'

import { Container, Col, Row, Button } from 'react-bootstrap';

import Profile from './components/Profile';
import Skills from './components/Skills';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Twitter from './components/Twitter.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';

import ReactGA from 'react-ga';

import { getProfile, getEducation, getExperience, getProjects } from './functions/getData'
import Footer from './components/Footer.js';
import DowloadButton from './components/DownloadButton';

export default class App extends Component {
  state = {
    profile: '',
    education: '',
    experience: '',
    projects: ''
  }

  componentDidMount(){
    this.getProfileData()
    this.getEducationData()
    this.getExperienceData()
    this.getProjectsData()
  }

  getProfileData = async() => {
    try {
      const response = await getProfile()
      this.setState({
        profile: response.data[0]
      })
    } catch (error) {
      console.log(error)
    }
  }
  getEducationData = async() => {
    try {
      const response = await getEducation()
      this.setState({
        education: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  getExperienceData = async() => {
    try {
      const response = await getExperience()
      this.setState({
        experience: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  getProjectsData = async() => {
    try {
      const response = await getProjects()
      this.setState({
        projects: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    ReactGA.initialize('UA-145700530-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    const {profile, education, experience, projects} = this.state
    return (
      <div>
      <Container style={{marginTop: 15}}>
        <Row>
          <Col xs={12} md={4}>
            <Profile profile={profile}/>
            <Skills skills={profile.skills}/>
            <Twitter/>
            <DowloadButton profileID={profile._id}/>
          </Col>
          <Col xs={12} md={8}>
            <About about={profile.about}/>
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

