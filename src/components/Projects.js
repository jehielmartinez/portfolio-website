import React from 'react'
import { Card, CardImg, CardDeck } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

import {path} from '../functions/getData'

export default function Projects(props) {
    let projects = props.projects
    if(!props.projects){
        projects = []
    }
    return (
        <Card style={{marginBottom: 15}}>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faMicrochip}/>Projects</Card.Title>
            </Card.Header>
            <Card.Body>
            <CardDeck>
                    {projects.map((project, key) => (
                        <Card key={key} style={{marginBottom: 5}}>
                            <CardImg src={`${path}/project-image/${project._id}`}/>
                            <Card.Header className='text-center'>
                                <Card.Title as='a' target='_blank' href={project.link} style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{project.name}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className='text-justify'>{project.description}</Card.Text>
                                
                            </Card.Body>
                        </Card>
                    ))}
              
              </CardDeck> 
            </Card.Body>
        </Card>
    )
}
