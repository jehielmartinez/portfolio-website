import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Footer(props) {
    return(
        <Navbar variant='dark' className='justify-content-between' style={{backgroundColor: '#003d5b'}}>
            <Navbar.Text>Jehiel Martinez &copy; 2019</Navbar.Text>
            <Navbar.Text as='a' target='_blank' href='https://github.com/jehielmartinez/portfolio-website'>Source Code</Navbar.Text>
        </Navbar>
    )
}