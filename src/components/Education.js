import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Education(props) {
    let education = props.education
    if (!props.education){
        education = []
    }
    return (
        <section className='mycard education-card'>
            <div className='mycard__header'>
                <h2><FontAwesomeIcon icon={faGraduationCap}/> Certifications</h2>
            </div>
            <div className='experience-card__slideshow'>
                {education.map((item, key) => (
                    <article key={key} className='mycard experience-card__experience'>
                        <header className='experience-card__experience--header'>
                        <img alt='company logo' src={item.logo}/>
                            <div>
                                <h5>{item.degree}</h5>
                                <a rel="noopener noreferrer" target='_blank' href={item.website}>{item.institution}</a>
                                <p>{item.startDate} - {item.endDate}</p>
                            </div>
                        </header>
                    </article>
                ))}
            </div>
        </section>
    )
}