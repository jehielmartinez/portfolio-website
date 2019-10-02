import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

export default function Twitter(props){
    return (
        <section className='mycard twitter-card'>
            <div >
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='jehielhn'
                    options={{height: 300}}
                    noScrollbar={true}
                    noFooter={true}
                />
            </div> 
        </section>
    ) 
}