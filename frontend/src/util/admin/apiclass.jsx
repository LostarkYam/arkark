import axios from 'axios';

export const getAllClasses = () => {
    axios.get('/api/v1/ark_classes.json')
    .then(response => {
        console.log(response);
        return response.data;
    }).catch(error => console.log(error));
}