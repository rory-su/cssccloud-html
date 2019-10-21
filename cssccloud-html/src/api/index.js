import axios from 'axios';
import * as configs from '../configs';

 const myapi = axios.create({
    baseURL: configs.SERVICE_URL
  });
  myapi.interceptors.request.use((config)=>{
     console.log("myapi interceptors  request",config)
     return config;
  },(error)=>{
      console.log("myapi interceptors request error",error)
     return Promise.reject(error)
  });

  myapi.interceptors.response.use((response)=>{
     console.log("myapi interceptors response",response)
     return response;
  },(error)=>{
      console.log("myapi interceptors response",error);
      return Promise.reject(error)
  })
  export default myapi;