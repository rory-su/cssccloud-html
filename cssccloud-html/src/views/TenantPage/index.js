import React from 'react';
import {Button} from 'antd';
import axios from 'axios';
import * as configs from '../../configs';



export default class Tenant extends React.Component{
    constructor(props){
        super(props)
        this.state={
            token:""
        }
    }
    handelonclick=()=>{
    axios.post(configs.SERVICE_URL+"/loginaction?username=rory&password=123456").then(res=>{
        console.log(res.data)
        this.setState({
            token:res.data.token
        })
    }).catch(error=>{
        console.log("error",error)
    })
    }
    ongetcode=()=>{
        const {token}=this.state;
        axios.get({url:configs.SERVICE_URL+"/oauth/authorize?client_id=client&response_type=code",header:{authorization:token}})
              .then(res=>{
                  console.log(res)
              }).catch(error=>{console.log("fefe")})
    }
    render(){
        return<div>租户管理
            <Button onClick={this.handelonclick}>获取token</Button>
            <div>token:{this.state.token}</div>
            <Button onClick={this.ongetcode}>获取令牌</Button>
        </div>
    }
}