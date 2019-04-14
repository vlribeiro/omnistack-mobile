import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-backend-vlribeiro.herokuapp.com"
});

export default api;