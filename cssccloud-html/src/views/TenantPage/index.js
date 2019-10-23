import React from 'react';
import {Button} from 'antd';
import axios from 'axios';
import * as configs from '../../configs';
import myapi from '../../api';




export default class Tenant extends React.Component{
    constructor(props){
        super(props)
        this.state={
            token:""
        }
    }
    handelonclick=()=>{
        myapi.post(configs.SERVICE_URL+"/loginaction?username=rory&password=123456").then(res=>{
        // this.setState({
        //     token:res.data.token
        // })
    }).catch(error=>{
        console.log("error",error)
    })
    }
    ongetcode=()=>{
        const {token}=this.state;
        // axios({
        //      method:"get",
        //      url:configs.SERVICE_URL+"/user/list",
        //      headers:{Authorization:"Bearer "+token}
        //  }).then(res=>{
        //           console.log(res)
        //       }).catch(error=>{console.log("fefe")})
       myapi.get("/user/list"
        // {   
        //     headers:{Authorization:"Bearer "+token}
        // }
       ).then(res=>{
           console.log("请求结果",res)
       }).catch(error=>{
           console.log("请求出错",error)
       })
    }
    render(){
        return<div>租户管理
            <Button onClick={this.handelonclick}>登录获取token</Button>
            <div>token:{this.state.token}</div>
            <Button onClick={this.ongetcode}>请求登录接口</Button>
        </div>
    }
}