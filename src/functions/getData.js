import axios from 'axios'

export const path = process.env.SERVER_PATH || 'http://localhost:4000/api'

export async function getProfile() {    
    return axios({
        url: `${path}/profile`,
        method: 'GET'
    })
}
export async function getEducation() {    
    return axios({
        url: `${path}/educations`,
        method: 'GET'
    })
}
export async function getExperience() {    
    return axios({
        url: `${path}/experiences`,
        method: 'GET'
    })
}
export async function getProjects() {    
    return axios({
        url: `${path}/projects`,
        method: 'GET'
    })
}