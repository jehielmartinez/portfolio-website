import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function About(props) {
    let about = props.about
    if (!props.about){
        about = []
    }
    return (
        <section className='mycard about-card'>
            <div className='mycard__header'>
                <h2><FontAwesomeIcon icon={faUserTie}/> About</h2>
            </div>
            <p className='about-card__text'>
                {about[0]}
                <em>{about[1]}</em>
            </p>
        </section>
    )
}