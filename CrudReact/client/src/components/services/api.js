import axios from 'axios';

const api = axios.create({
    baseURL:'http://rodrigodev.ninja:3000'
});

export default api;