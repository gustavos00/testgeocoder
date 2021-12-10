import axios from 'axios';

//https://myanimalapi.herokuapp.com/api
let baseURL = 'https://testgeocoderreact.herokuapp.com/api';

const instance = axios.create({
  baseURL,
});

export default instance;