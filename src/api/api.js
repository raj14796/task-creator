import axios from 'axios'

const API = axios.create({baseURL : 'https://stage.api.sloovi.com'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token;
    }
    return req;
})

export const login = (loginData) => API.post('/login',loginData);
export const getUser = () => API.get('/user');
export const addTask = (formData) => API.post('/task/lead_58be137bfde045e7a0c8d107783c4598',formData);
export const getAllTask = () => API.get('/task/lead_58be137bfde045e7a0c8d107783c4598');
export const getSingleTask = (taskId) => API.get('/task/lead_58be137bfde045e7a0c8d107783c4598/'+taskId);
export const updateTask = (taskId,formData) => API.put('/task/lead_58be137bfde045e7a0c8d107783c4598/'+taskId,formData);
export const deleteTask = (taskId) => API.delete('/task/lead_58be137bfde045e7a0c8d107783c4598/'+taskId);