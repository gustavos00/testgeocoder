import axios from 'axios';

//https://myanimalapi.herokuapp.com/api
let baseURL = 'https://testgeocoderapi.herokuapp.com/api';

const instance = axios.create({
  baseURL,
});

export default instance;