import axios from 'axios';


export function axiosForLoginAndRegistration(url, method) {
    return axios({
      url,
      method,
  
    });
  }

