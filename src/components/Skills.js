import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Skills(props) {
    let skills = props.skills
    if (!props.skills){
        skills = []
    }
    return (
        <Card style={{marginBottom: 15}}>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faCode}/>Skills</Card.Title>
            </Card.Header>
            <Card.Body>
                <div>
                    {skills.map((skill, key) => (
                        <Button key={key} style={{margin: 5, backgroundColor: '#F7F7F7', color: 'black', fontWeight: 'bold'}} variant='secondary'>{skill}</Button>
                    ))}
                </div>  
            </Card.Body>
        </Card>
        
    )
}