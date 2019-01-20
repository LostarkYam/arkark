import axios from 'axios';

export const getAllPassives = () => {
    axios.get('/api/v1/passives.json')
    .then(response => {
        console.log(response);
        return response.data;
    }).catch(error => console.log(error));
}