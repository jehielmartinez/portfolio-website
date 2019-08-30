import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {path} from '../functions/getData'

export default function DowloadButton(props){
    return (
        <div className='justify-content-center d-flex'>
            <Button
                as='a'
                target='_blank'
                href={`${path}/curriculum/${props.profileID}`}
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
