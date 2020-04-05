import axios from 'axios';

const api = axios.create({
    baseURL: 'https://comicclan.vett.io/',
    // Bearer auto auth
    headers: { Authorization: 'Bearer ComicClanVettIO2019' } 
});

export default api;