import React from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Education(props) {
    const education = props.education
    return (
        <Card style={{marginBottom: 10}}>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faGraduationCap}/>Education</Card.Title>
            </Card.Header>
            <Card.Body style={{textAlign: 'justify'}}>
                {education.map((item, key) => (
                    <Card key={key}>
                        <Card.Header>
                            <Card.Title style={{margin:0}}>{item.degree}</Card.Title>
                            <Card.Subtitle as='a' target='_blank' href={item.website} style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>{item.institution}</Card.Subtitle>
                            <Card.Text style={{fontSize: 12}}>{item.startDate} - {item.endDate}</Card.Text>
                        </Card.Header>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    )
}