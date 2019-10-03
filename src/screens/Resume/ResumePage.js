import React, { Component } from 'react'
import './ResumePage.css'
import resume from '../../assets/resume.json';

import Profile from '../../components/Profile'
import Twitter from '../../components/Twitter'
import Skills from '../../components/Skills'
import DowloadButton from '../../components/DownloadButton';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';

export default class ResumePage extends Component {
    state = {
        resume
    }

    render() {
        const {profile, skills, about, projects, experience} = this.state.resume
        return (
            <div>
                <main className='main_container'>          
                    <div className='profile_section'>
                        <Profile profile={profile}/>
                        <Skills skills={skills}/>
                        <Twitter/>
                        <DowloadButton/>
                    </div>

                    <div class='carreer_section'>
                        <About about={about}/>
                        <Projects projects={projects}/>
                        <Experience experience={experience}/>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
