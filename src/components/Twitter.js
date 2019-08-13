import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import { Card } from 'react-bootstrap';

export default function Twitter(props){
    return (
        <Card style={{marginBottom: 10}}>
            <Card.Body>
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='JehielMartinez1'
                    options={{height: 300}}
                    noScrollbar={true}
                    noFooter={true}
                />
            </Card.Body> 
        </Card>
    ) 
}