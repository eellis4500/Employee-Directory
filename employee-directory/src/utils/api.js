import axios from 'axios';

export default {
  getUsers: () => {
    return axios({
      method: 'get',
      url: 'https://randomuser.me/api/',
    })
  } 
}