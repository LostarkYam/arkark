import axios from 'axios';

export const getAllClasses = () => {
    return axios.get('/api/v1/ark_classes.json');
}

export const createClass = (classes) => {
    return axios({
        method: 'post',
        url: '/api/v1/ark_classes.json',
        data: classes});
}

export const deleteClass = (id) => {
    return axios({
        method: 'delete',
        url: `/api/v1/ark_classes/${id}.json`});
}

export const editClass = (classes) => {
    return axios({
        method: 'patch',
        url: `/api/v1/ark_classes/${classes.id}.json`,
        data: classes});
}