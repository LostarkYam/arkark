import axios from 'axios';

export const getAllSkills = () => {
    axios.get('/api/v1/skills.json')
    .then(response => {
        console.log(response);
        return response.data;
    }).catch(error => console.log(error));
}