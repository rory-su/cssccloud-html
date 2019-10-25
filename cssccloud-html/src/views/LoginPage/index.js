import React,{Component} from 'react';
import styled from 'styled-components';
import myapi from '../../api';
import * as configs from '../../configs';
import LogoImg from '../../static/images/compLogo.png'
import { Form, Input, Button, Icon,message } from 'antd';
import {connect} from 'react-redux'
const { Item } = Form;
const LoginPage=Form.create()(class Page extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.login(values.username,values.password)
          }
        });
    }; 
    login=(account,password)=>{
        myapi.post(configs.SERVICE_URL+"/loginaction?username="+account+"&password="+password,).then((res)=>{
           console.log("res",res)
           const data=res.data;
           if(data.status=="203"){
               this.props.history.replace("/")
           }else{
               message.error(data.message);
           }
      }).catch(err=>{
          message.error("网络请求出错")
      })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return<Main>
        <Header >
            <HeaderLeft>
            <Logo />
            <SystemName>船海智云</SystemName>
            </HeaderLeft>
            <HeaderRight>
                <HeaderItem>帮助</HeaderItem>
                <HeaderItem>关于</HeaderItem>
                <HeaderItem>支持与服务</HeaderItem>
            </HeaderRight>
        </Header>
        <Section className="loginSection">
         <LoginFormDiv >
                <FormTitel>账户登录</FormTitel>
                <Form onSubmit={this.handleSubmit}>
                    <Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '用户名不能为空' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="输入帐号或邮箱"
                            />,
                        )}
                    </Item>
                    <Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不能为空' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="输入密码"
                            />,
                        )}
                    </Item>
                    <Item>
                        <Button type="primary" block  htmlType="submit">登录</Button>
                    </Item>
                    <Item>
                        <FormFooterItemPwd onClick={()=>{this.props.history.push("/login/forgetpassword")}}>忘记密码</FormFooterItemPwd>
                        <FormFooterItemReg onClick={this.showModal}>免费注册</FormFooterItemReg>
                    </Item>
                </Form>
            </LoginFormDiv>
            
        </Section>
        <Footer>
            <FooterItem>Copyright©2019船海智云,All Rights Reserved 粤ICP备18140767号</FooterItem>
        </Footer>  
    </Main>
    }
})
const mapStateToProps=(state)=>{
    return{
    
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       initUserInfo(data){
        
       }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(LoginPage) ;

const Main = styled.div`
 width: 100%;
 height: 100vh;
 background:#C4E1FF;
`
const Header = styled.div`
 width: 100%;
 height: 50px;
 position: fixed;
 top: 0px;
 z-index:100;
 background: white;
 box-shadow: 0px 10px 20px -20px #5E5E5E;
`
const HeaderLeft=styled.div`
 float:left
`
const Logo = styled.img.attrs({ src: LogoImg })`
 width: 40px;
 height: 30px;
 margin-left:60px;
 margin-top:10px;
 float:left
`
const SystemName=styled.div`
 float:left;
 line-height:50px;
 font-size:20px;
 margin-left:10px;
 font-weight:bold;
`
const HeaderRight = styled.div`
 float: right;
 height: 30px;
 margin-top: 10px;
 padding-right: 10px;
 border-right:1px solid #c3c3c3;
`
const HeaderItem = styled.a`
 line-height:30px; 
 margin-right:5px;
 color:#c3c3c3
`
const Section = styled.div`
 width:100%;
 height: 100%;
 padding-top: 50px;
 padding-bottom:50px;
 box-sizing:boder-box;
 overflow: auto;
`
const Footer = styled.div`
 width: 100%;
 height: 50px;
 position: absolute;
 background: #313131;
 bottom: 0px;
 z-index:1000;
 text-align:center;
 padding-top:10px 
`
const FooterItem = styled.a`
 line-height:30px; 
 color:azure
`
const LoginFormDiv = styled.div`
 width:400px;
 height:350px;
 position:absolute;
 top:50%;
 left:80%;
 margin-top:-200px;
 margin-left:-200px;
 background:white;
 box-shadow:10px 10px 5px #8888;
 border-radius:4px;
 padding:40px 50px;

`
const FormTitel = styled.h4`
  margin-bottom:30px;
`
const FormFooterItemPwd = styled.a`
  float:left;
`
const FormFooterItemReg = styled.a`
   float:right;

`