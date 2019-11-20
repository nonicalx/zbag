import axios from 'axios'

let baseurl = 'https://zbag.herokuapp.com/api';
let baseurl1 = 'http://localhost:8080/api'

const SignUpApi = (data = {}) => {
    return axios.post(`${baseurl}/user/register`, data).then(result => result.data).catch(err => err);
}

const LoginApi = (data = {}) => {
    return axios.post(`${baseurl}/user/login`, data).then(result => result.data).catch(err => err);
}



export {
    SignUpApi,
    LoginApi
}