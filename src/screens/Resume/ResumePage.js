import React, { Component } from 'react'
import './ResumePage.css'
import resume from '../../assets/resume.json';

import Profile from '../../components/Profile'
import Twitter from '../../components/Twitter'
import Skills from '../../components/Skills'
import DowloadButton from '../../components/DownloadButton';
import About from '../../components/About';

export default class ResumePage extends Component {
    state = {
        resume
    }

    render() {
        const {profile, skills, about} = this.state.resume
        return (
            <main className='main_container'>          
                <div className='profile_section'>
                    <Profile profile={profile}/>
                    <Skills skills={skills}/>
                    <Twitter/>
                    <DowloadButton/>
                </div>

                <div class='carreer_section'>
                    <About about={about}/>
                </div>
            </main>
        )
    }
}
