import axios from 'axios';

//https://testgeocoderapi.herokuapp.com/api/
//http://localhost:3000/api
let baseURL = 'https://testgeocoderapi.herokuapp.com/api/';

const instance = axios.create({
  baseURL,
});

export default instance;