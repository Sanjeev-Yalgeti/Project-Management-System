import axios from 'axios'
const api=axios.create({
    baseUrl:import.meta.env.VITE_API_URL ||'https://localhost:5000/api',
    withCredentials:true,
    headers:{
        'Content-Type':'application/json',
    },
});
export default api;