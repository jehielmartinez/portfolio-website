import React, { Component } from 'react'
import './ResumePage.css'
import resume from '../../assets/resume.json';

import Profile from '../../components/Profile'
import Twitter from '../../components/Twitter'
import Skills from '../../components/Skills'

export default class ResumePage extends Component {
    state = {
        resume
    }

    render() {
        const {profile} = this.state.resume
        return (
            <main className='main_container'>          
                <div className='profile_section'>
                    <Profile profile={profile}/>
                    <Skills/>
                    <Twitter/>
                </div>

                <div class='carreer_section'>
                    Hola
                </div>
            </main>
        )
    }
}
