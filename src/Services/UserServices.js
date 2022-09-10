import axios from "axios";

const APIprefix = 'http://localhost:5000';

function LoginRequest(body) {
    return axios.post(`${APIprefix}/login`, body);
}

function signUpRequest(body){
    return axios.post(`${APIprefix}/signup`, body);
}

function itensRequest(){
    return axios.get(`${APIprefix}/itens`);
}

function itensEntryRequest(body, id){
    return axios.post(`${APIprefix}/entry/${id}`, body);
}
export {
    LoginRequest,
    signUpRequest,
    itensRequest,
    itensEntryRequest
}