import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Experience(props) {
    let experience = props.experience
    if(!props.experience){
        experience = []
    }
    return (
        <section className='mycard experience-card'>
            <div className='mycard__header'>
                <h2><FontAwesomeIcon icon={faBriefcase}/> Experience</h2>
            </div>
            <div className='experience-card__slideshow'>
                {experience.map((job, key) => (
                    <article key={key} className='mycard experience-card__experience'>
                        <header className='experience-card__experience--header'>
                            <img alt='company logo' src={job.logo}/>
                            <div>
                                <h5>{job.position}</h5>
                                <a rel="noopener noreferrer" target='_blank' href={job.website}>{job.company}</a>
                                <p>{job.startDate} - {job.endDate}</p>
                            </div>    
                        </header>
                        <p className='experience-card__experience--description'>
                            <ul>
                                {job.activities.map((activity, key)=>(
                                    <li key={key}>{activity}</li>
                                ))}
                            </ul>
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}