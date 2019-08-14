import React from 'react'
import { Card, CardImg, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function Projects(props) {
    const projects = props.projects
    return (
        <Card style={{marginBottom: 15}}>
            <Card.Header className='text-white' style={{backgroundColor: '#003d5b'}}>
                <Card.Title><FontAwesomeIcon style={{marginRight: 10}} icon={faMicrochip}/>Projects</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    {projects.map((project, key) => (
                        <Col key={key} xs={12} md={6}>
                            <Card style={{marginBottom: 5}}>
                                <CardImg src={project.image}/>
                                <Card.Header className='text-center'>
                                    <Card.Title as='a' target='_blank' href={project.link} style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>{project.name}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className='text-justify'>{project.description}</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col> 
                    ))}
                </Row>
                
            </Card.Body>
        </Card>
    )
}
