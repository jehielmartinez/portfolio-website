import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function About(props) {
    return (
        <Card style={{marginBottom: 15}}>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faUserTie}/>About</Card.Title>
            </Card.Header>
            <Card.Body style={{textAlign: 'justify'}}>
                <div>{props.about[0]}
                <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>{props.about[1]}</span></div>
            </Card.Body>
        </Card>
    )
}