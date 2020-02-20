import React, { Component } from 'react'
import './ResumePage.css'
import resume from '../../assets/resume';

import Profile from '../../components/Profile'
import Twitter from '../../components/Twitter'
import Skills from '../../components/Skills'
import DowloadButton from '../../components/DownloadButton';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import ProjectModal from '../../components/ProjectModal';
import Education from '../../components/Education';

export default class ResumePage extends Component {
    state = {
        resume,
        show: false,
        selectedProject: {}
    }

    openModal = (project) => {
        this.setState({
            show: true,
            selectedProject: project
        })
    }
    closeModal = () => {
        this.setState({
            show: false
        })
    }
    renderProjectModal = () => {
        if(this.state.show){
            return (
                <ProjectModal closeModal={this.closeModal} project={this.state.selectedProject}/>
            )
        }
    }

    render() {
        const {profile, skills, about, projects, experience, education} = this.state.resume
        return (
            <div>
                <main className='main_container'>
                    {this.renderProjectModal()}          
                    <div className='profile_section'>
                        <Profile profile={profile}/>
                        <Skills skills={skills}/>
                        <Twitter/>
                        <DowloadButton/>
                    </div>

                    <div className='carreer_section'>
                        <About about={about}/>
                        <Projects projects={projects} openModal={this.openModal}/>
                        <Education education={education}/>
                        <Experience experience={experience}/>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
