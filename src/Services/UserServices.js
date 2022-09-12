import axios from "axios";

const APIprefix = 'http://localhost:5000';

function LoginRequest(body) {
    return axios.post(`${APIprefix}/login`, body);
}

function signUpRequest(body){
    return axios.post(`${APIprefix}/signup`, body);
}

function itensRequest(){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get(`${APIprefix}/itens`, config);   
}

function itensEntryRequest(body, id){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return axios.post(`${APIprefix}/entry/${id}`, body, config);
}
export {
    LoginRequest,
    signUpRequest,
    itensRequest,
    itensEntryRequest
}