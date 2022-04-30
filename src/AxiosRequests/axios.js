import axios from 'axios';

const axiosClient = axios.create({
    baseURL:"http://localhost:8080"
});

// axiosClient.defaults.headers = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// };

// //All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export function getEvents() {
    return axiosClient.get('admin/event/all-event').then(response => response);
  }