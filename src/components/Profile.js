import React from 'react'
import { Card, Row, Button } from 'react-bootstrap'
import profilePic from '../assets/profile-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Profile(props) {
    const {name, label, location, github, instagram, twitter, email, linkedin } = props.profile
    return (
        <Card className='text-center shadow-sm' style={{marginBottom: 15}}>
            <Card.Img src={profilePic}/>
            <Card.Header>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{label}</Card.Subtitle>
                <Card.Text>{location}</Card.Text>
            </Card.Header>
            <Card.Body>
                <Row style={{marginBottom: 20}} className='d-flex justify-content-center align-items-center'>
                    <Button as='a' target='_blank' href={`https://github.com/${github}`} variant='outline' size='sm'><FontAwesomeIcon size='2x' style={{marginRight: 10}} icon={faGithub}/></Button>
                    <Button as='a' target='_blank' href={`https://twitter.com/${twitter}`} variant='outline' size='sm'><FontAwesomeIcon color='#1DA1F2' size='2x' style={{marginRight: 10}} icon={faTwitter}/></Button>
                    <Button as='a' target='_blank' href={`https://www.linkedin.com/in/${linkedin}`} variant='outline' size='sm'><FontAwesomeIcon color='#0077b5' size='2x' style={{marginRight: 10}} icon={faLinkedin}/></Button>
                    <Button as='a' target='_blank' href={`https://www.instagram.com/${instagram}/`}  variant='outline' size='sm'><FontAwesomeIcon color='#F77737' size='2x' style={{marginRight: 10}} icon={faInstagram}/></Button>
                    <Button as='a' href={`mailto:${email}`} variant='outline' size='sm'><FontAwesomeIcon color='#C71610' size='2x' style={{marginRight: 10}} icon={faEnvelopeOpenText}/></Button>
                </Row>
            </Card.Body>
        </Card>
    )
}
