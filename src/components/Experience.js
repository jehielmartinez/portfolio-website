import React from 'react'
    import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Experience(props) {
    let experience = props.experience
    if(!props.experience){
        experience = []
    }
    return (
        <Card style={{marginBottom: 15}}>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faBriefcase}/>Experience</Card.Title>
            </Card.Header>
            <Card.Body style={{textAlign: 'justify'}}>
                {experience.map((job, key) => (
                    <Card key={key} style={{marginBottom: 10}}>
                        <Card.Header>
                            <Card.Title style={{margin:0}}>{job.position}</Card.Title>
                            <Card.Subtitle as='a' target='_blank' href={job.website} style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{job.company}</Card.Subtitle>
                            <Card.Text style={{fontSize: 12}}>{job.startDate} - {job.endDate}</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <ul>
                                {job.activities.map((activity, key)=>(
                                    <li key={key}>{activity}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    )
}