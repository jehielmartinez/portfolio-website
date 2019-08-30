import React from 'react'
import { Card, CardImg, CardDeck, Carousel, Row, Col } from 'react-bootstrap'
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
            <Carousel interval={2000}>
                
                    {projects.map((project, key) => (
                        <Carousel.Item>
                        <Row>
                            <Col xs={12} md={6}>
                                <Card key={key} style={{margin: 5}}>
                                    <CardImg src={`${path}/project-image/${project._id}`}/>
                                    <Card.Header className='text-center'>
                                        <Card.Title as='a' target='_blank' href={project.link} style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{project.name}</Card.Title>
                                </Card.Header>
                            </Card>
                            </Col>
                            <Col xs={12} md={6}>
                            <Card key={key}>
                                <Card.Body>
                                    <Card.Text className='text-justify'>{project.description}</Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        </Carousel.Item>
                    ))}
                   
              </Carousel> 
            </Card.Body>
        </Card>
    )
}
