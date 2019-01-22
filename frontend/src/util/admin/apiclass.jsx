import axios from 'axios';

export const getAllClasses = () => {
    return axios.get('/api/v1/ark_classes.json');
}