
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products/',
})

export default api;
