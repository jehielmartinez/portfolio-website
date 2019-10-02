import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

export default function Profile(props) {
    const { name, label, location, github, instagram, twitter, email, linkedin } = props.profile
    return (
        <section className='mycard profile_card'>
            <img alt='profile-pic' src={require('../assets/images/profile-pic.jpg')}/>
            <div className='profile_card__info'>
                <p className='profile_card__info--name'>{name}</p>
                <p className='profile_card__info--label'>{label}</p>
                <p className='profile_card__info--location'>{location}</p>
            </div>
            <div className='profile-card__social'>
                <ul>
                    <li><a rel="noopener noreferrer" href={`https://github.com/${github}`} target='_blank'><FontAwesomeIcon color='#000000' href='/' icon={faGithub}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://twitter.com/${twitter}`} target='_blank'><FontAwesomeIcon color='#1DA1F2' icon={faTwitter}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://www.instagram.com/${instagram}/`} target='_blank'><FontAwesomeIcon color='#F77737' icon={faInstagram}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://www.instagram.com/${linkedin}/`} target='_blank'><FontAwesomeIcon color='#0077B5' icon={faLinkedin}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://www.instagram.com/${instagram}/`} target='_blank'><FontAwesomeIcon color='#5A5F73' icon={faCodepen}/></a></li>
                    <li><a rel="noopener noreferrer" href={`mailto:${email}`} target='_blank'><FontAwesomeIcon color='#C71610' icon={faEnvelopeOpenText}/></a></li>
                </ul>
            </div>
        </section>
    )
}
