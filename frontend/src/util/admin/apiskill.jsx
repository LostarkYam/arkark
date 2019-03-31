import axios from 'axios';

export const getAllSkills = () => {
    return axios.get('/api/v1/skills.json');
}

export const createSkill = (skill) => {
    return axios({
        method: 'post',
        url: '/api/v1/skills.json',
        data: skill});
}

export const deleteSkill = (id) => {
    return axios({
        method: 'delete',
        url: `/api/v1/skills/${id}.json`});
}

export const editSkill = (skill) => {
    return axios({
        method: 'patch',
        url: `/api/v1/skills/${skill.id}.json`,
        data: skill});
}