import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
export default class Mymenu extends React.Component {
    constructor(props){
        super(props)
        this.state={
            defaultSelectedKeys:"1"  
        }
    }
    componentDidMount(){
        const defaultSelectedKeys=this.props.location.pathname
        this.setState({
            defaultSelectedKeys:defaultSelectedKeys
        })
    }
    handelonSelect=(e)=>{
        this.setState({
            defaultSelectedKeys:e.key
        })
    }
    render() {
        const {defaultSelectedKeys}=this.state;
        console.log("fdfsdfsdsujinquan",defaultSelectedKeys)
        return (<Menu theme="dark" defaultSelectedKeys={["1"]} selectedKeys={[defaultSelectedKeys]} mode="inline" onSelect={this.handelonSelect}>
            <Menu.Item key="1">
               <Link to="/"><Icon type="home"/> <span>首页</span></Link>   
            </Menu.Item>
            <SubMenu key="sub1" title={<span> <Icon type="user" /><span>User</span></span>}>
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>

            <Menu.Item key="9">
                <Icon type="file" /><span>File</span>
            </Menu.Item>

            <SubMenu key="sub12wef13" title={<span> <Icon type="user" /><span>消息中心</span></span>}>
                <Menu.Item key="31ggf23">Tom</Menu.Item>
                <Menu.Item key="4fef个">Bill</Menu.Item>
                <Menu.Item key="5fewfwdf">Alex</Menu.Item>
            </SubMenu>

            <SubMenu key="sub1213" title={<span> <Icon type="user" /><span>流程中心</span></span>}>
                <Menu.Item key="3123">Tom</Menu.Item>
                <Menu.Item key="4个">Bill</Menu.Item>
                <Menu.Item key="5fdf">Alex</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" title={<span><Icon type="sliders" /><span>后台管理</span></span>}>
                    <Menu.Item key="/humanresource"><Link to="/humanresource">人力资源</Link></Menu.Item>
                    <Menu.Item key="/resource"><Link to="/resource">资源管理</Link></Menu.Item>
            </SubMenu>

            <SubMenu key="sub122" title={<span> <Icon type="cloud" /><span>平台管理</span></span>}> 
                <Menu.Item key="/tenantmanager"><Link to="/tenantmanager">租户管理</Link></Menu.Item>
                <Menu.Item key="/platusermanange"><Link to="/platusermanange">人员管理</Link></Menu.Item>
                <Menu.Item key="/logpage"><Link to="/logpage">日志管理</Link></Menu.Item>
            </SubMenu>
        </Menu>)
    }
}