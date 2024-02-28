// Config.js
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  // default configurations
  // timeout: 10000, // Timeout of 10 seconds
});

//PUT THIS IN .env FILE process.env.NODE_ENV
export const DEVMODE = false;

export const USE_WEBSOCKET = 'false';
export  const WEBSOCKET_BASE_URL = 'ws://localhost:5000/';

