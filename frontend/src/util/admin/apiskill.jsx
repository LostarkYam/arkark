import axios from 'axios';

export const getAllSkills = () => {
    return axios.get('/api/v1/skills.json');
}