import axios from 'axios';
import * as configs from '../configs';

 const myapi = axios.create({
    baseURL: configs.SERVICE_URL
  });
  myapi.interceptors.request.use((config)=>{
   //   console.log("myapi interceptors  request",config)
      const token=localStorage.getItem("token")
      if(token){
          config.headers["Authorization"]=token;
      }
     return config;
  },(error)=>{
      console.log("myapi interceptors request error",error)
     return Promise.reject(error)
  });

  myapi.interceptors.response.use((response)=>{
   //   console.log("myapi interceptors response",response)
     const token=response.headers.authorization;
     if(token!=null){
        localStorage.setItem("token",response.headers.authorization)
      }else{
        window.location.replace("/#/login")
      }
     return response;
  },(error)=>{
      console.log("myapi interceptors response",error);
      return Promise.reject(error)
  })
  export default myapi;