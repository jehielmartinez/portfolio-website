import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Resume.css'
import { faGithub, faTwitter, faInstagram, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export default class Resume extends Component {
    render() {
        return (
            <main className='main_container'>
                
                <div className='profile_section'>
                    <section className='profile_card'>
                        <img src={require('../../assets/images/profile-pic.jpg')}/>
                        <div className='profile_card__info'>
                            <p className='profile_card__info--name'>Fredys Jehiel Martinez Espinoza</p>
                            <p className='profile_card__info--title'>Software Developer / Electrical Engineer</p>
                            <p className='profile_card__info--location'>San Pedro Sula, Honduras</p>
                        </div>
                        <div className='profile-card__social'>
                            <ul>
                                <li><a href='' target='_blank'><FontAwesomeIcon color='#000000' href='/' icon={faGithub}/></a></li>
                                <li><a href='' target='_blank'><FontAwesomeIcon color='#1DA1F2' icon={faTwitter}/></a></li>
                                <li><a href='' target='_blank'><FontAwesomeIcon color='#F77737' icon={faInstagram}/></a></li>
                                <li><a href='' target='_blank'><FontAwesomeIcon color='#5A5F73' icon={faCodepen}/></a></li>
                                <li><a href='' target='_blank'><FontAwesomeIcon color='#C71610' icon={faEnvelopeOpenText}/></a></li>
                            </ul>
                        </div>
                    </section>
                    
                </div>

                <div class='carreer_section'>
                    Hola
                </div>
            </main>
        )
    }
}
