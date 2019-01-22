import axios from 'axios';

export const getAllPassives = () => {
    return axios.get('/api/v1/passives.json');
}