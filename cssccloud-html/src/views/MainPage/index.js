import React from 'react';
import styled from 'styled-components'
import { Layout, Menu, Icon, Badge, Tooltip, Dropdown,Breadcrumb } from 'antd';
import LogoImg from '../../static/images/compLogowitname.png';
import Mymenu from './MyMenu';
import MyRouter from './MyRouter';

const { Header, Content, Footer, Sider } = Layout;

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const { collapsed } = this.state;
        const menu = (
            <Menu>
                <Menu.Item>
                    <Icon type="user" style={{ padding: "5px" }} />&nbsp;个人中心
              </Menu.Item>
                <Menu.Item>
                    <Icon type="setting" style={{ padding: "5px" }} />&nbsp;个人设置
              </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <Icon type="logout" style={{ padding: "5px" }} />&nbsp;退出登录
              </Menu.Item>
            </Menu>
        );
        return (<Main>
            <Layout>
                <Header className="mainTop">
                    <Logo />
                    <HeaderRightDiv>
                        <Dropdown overlay={menu} placement="bottomRight" overlayStyle={{ minWidth: "150px" }}>
                            <RightItem>
                                <Icon type="user" style={{ padding: "5px" }} />&nbsp;张三
                    </RightItem>
                        </Dropdown>
                        <RightItem>
                            <Badge count={5}>
                                <Icon type="sound" style={{ padding: "5px" }} />
                            </Badge>
                        </RightItem>
                        <RightItem>
                            <Tooltip placement="bottom" title={"使用文档"}>
                                <Icon type="question-circle" style={{ padding: "5px" }} />
                            </Tooltip>
                        </RightItem>
                        <RightItem>
                            <Icon type="search" style={{ padding: "5px" }} />
                        </RightItem>
                    </HeaderRightDiv>
                </Header>
                <Content>
                    <Layout>
                        <Sider className="myMenuSider" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" />
                             <Mymenu {...this.props}/>
                        </Sider>
                        <Layout>
                            <Content style={{ margin: '10px 5px 0 10px' }}>
                                <MyContent >
                                   <MyRouter/>
                                </MyContent>
                            </Content>
                            <Footer style={{ textAlign: 'center',padding:"10px 50px"}}>Copyright©2019船海智云,All Rights Reserved 粤ICP备18140767号</Footer>
                        </Layout>
                    </Layout>
                </Content>
            </Layout>
        </Main>
        )
    }
}
const Main = styled.div`
     width:100%;
     height:100%;
`
const Logo = styled.img.attrs({ src: LogoImg })`
    height:30px;
    line-height:50px;
`
const HeaderRightDiv = styled.div`
   float:right;
`
const RightItem = styled.div`
     line-height:49px;
     float:right;
     min-width:40px;
     padding-left:5px;
     padding-right:5px;
     text-align:center;
     &:hover{
        background:#00152910;
     }
`
const MyContent=styled.div`
  background:#fff;
  padding-left:10px;
  min-height:calc(100vh - 105px);
  max-height:calc(100vh - 105px);
  overflow:auto;

`
