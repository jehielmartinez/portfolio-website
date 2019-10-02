import React, { Component } from 'react'
import './Resume.css'

export default class Resume extends Component {
    render() {
        return (
            <main className='main_container'>
                <section className='profile_section'>
                    <article className='profile_card'>
                        <img src={require('../../assets/images/profile-pic.jpg')}/>
                        <div className='profile_card__info'>
                            <p className='profile_card__info--name'>Fredys Jehiel Martinez Espinoza</p>
                            <p className='profile_card__info--title'>Software Developer / Electrical Engineer</p>
                            <p className='profile_card__info--location'>San Pedro Sula, Honduras</p>
                        </div>
                    </article>
                </section>
                <section class='carreer_section'>
                    Hola
                </section>
            </main>
        )
    }
}
