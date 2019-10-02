import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/Jehiel_Martinez_CV.pdf';

export default function DowloadButton(props) {
    return (
       <div className='download-section'>
           <a
            href={resume}
            download='Jehiel Martinez CV'>
            <button className='download-button'>
                <FontAwesomeIcon
                    icon={faDownload}
                    style={{marginRight: 10}}
                />
                Download CV in PDF
            </button>
        </a>
       </div>
        
    )
}
