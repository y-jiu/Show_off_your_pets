import axios from 'axios';

const API = axios.create();

export const UserList = () => API.get("/api/v1/user/"); 
export const UserCreate = ((user_name, user_id, user_pw) => API.post("/api/v1/user/", {
    user_name: user_name,
    user_id: user_id,
    user_pw: user_pw
}));