import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/Jehiel_Martinez_CV.pdf';

export default function DowloadButton(props){
    return (
        <div className='justify-content-center d-flex'>
            <Button
                as='a'
                target='_blank'
                href={resume}
                download='Jehiel Martinez CV'
                style={{backgroundColor: '#003d5b', border: 0, marginBottom: 10}}>
                <FontAwesomeIcon 
                    icon={faDownload}
                    style={{marginRight: 10}}
                />
                Download CV in PDF 
            </Button>
        </div>
        
        
    )
}
