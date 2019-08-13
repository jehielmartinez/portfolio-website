import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Skills(props) {
    const skills = props.skills
    return (
        <Card>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faCode}/>Skills</Card.Title>
            </Card.Header>
            <Card.Body>
                <div>
                    {skills.map(skill => (
                        <Button style={{marginRight: 5}} variant='info'>{skill}</Button>
                    ))}
                </div>
            </Card.Body>
        </Card>
        
    )
}