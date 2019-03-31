import axios from 'axios';

export const getAllPassives = () => {
    return axios.get('/api/v1/passives.json');
}

export const createPassive = (passive) => {
    return axios({
        method: 'post',
        url: '/api/v1/passives.json',
        data: passive});
}

export const deletePassive = (id) => {
    return axios({
        method: 'delete',
        url: `/api/v1/passives/${id}.json`});
}

export const editPassive = (passive) => {
    console.log(passive);
    return axios({
        method: 'patch',
        url: `/api/v1/passives/${passive.id}.json`,
        data: passive});
}