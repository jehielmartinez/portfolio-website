import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDev, faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

export default function Profile(props) {
    const { name, label, location, github, dev, twitter, email, linkedin, codepen } = props.profile
    return (
        <section className='mycard profile_card'>
            <img alt='profile-pic' src={require('../assets/images/profile-pic.jpg')}/>
            <div className='profile_card__info'>
                <h1 className='profile_card__info--name'>{name}</h1>
                <h2 className='profile_card__info--label'>{label}</h2>
                <h3 className='profile_card__info--location'>{location}</h3>
            </div>
            <div className='profile-card__social'>
                <ul>
                    <li><a rel="noopener noreferrer" href={`https://github.com/${github}`} target='_blank'><FontAwesomeIcon color='#000000' href='/' icon={faGithub}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://twitter.com/${twitter}`} target='_blank'><FontAwesomeIcon color='#1DA1F2' icon={faTwitter}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://www.linkedin.com/in/${linkedin}/`} target='_blank'><FontAwesomeIcon color='#0077B5' icon={faLinkedin}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://dev.to/${dev}`} target='_blank'><FontAwesomeIcon color='#000000' icon={faDev}/></a></li>
                    <li><a rel="noopener noreferrer" href={`https://codepen.io/${codepen}/pens/public`} target='_blank'><FontAwesomeIcon color='#5A5F73' icon={faCodepen}/></a></li>
                    <li><a rel="noopener noreferrer" href={`mailto:${email}`} target='_blank'><FontAwesomeIcon color='#C71610' icon={faEnvelopeOpenText}/></a></li>
                </ul>
            </div>
        </section>
    )
}
