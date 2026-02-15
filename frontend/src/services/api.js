import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8085/api',
    headers: { 'Content-Type': 'application/json' },
});

export const getReservation = () => api.get('/reservations');
export const createReservation = (data) => api.post('/reservations', data);

export default api;