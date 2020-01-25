import React from 'react'

export default function ProjectModal(props) {
    const {project, closeModal} = props

    return(
        <section onClick={closeModal} className='project-modal'>
            <article className='mycard project-modal__content'>
                <div className='project-modal__content--image'>
                    <img src={require(`../assets/images/${project.image}`)} alt='project'/>
                </div>
                <div className='project-modal__content--description'>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </div>
                
            </article>  
        </section>
    )
}