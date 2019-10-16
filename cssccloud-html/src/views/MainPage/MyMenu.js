import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
export default class Mymenu extends React.Component {
    render() {
        return (<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
               <Link to="/"><Icon type="desktop" /> <span>首页</span></Link>   
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

            <SubMenu key="sub2" title={<span><Icon type="team" /><span>后台管理</span></span>}>
                <SubMenu key="sub122121" title={<span>人力资源</span>}>
                    <Menu.Item key="6">组织机构</Menu.Item>
                    <Menu.Item key="8">人员管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2131" title={<span>资源管理</span>}>
                    <Menu.Item key="91231">菜单管理</Menu.Item>
                    <Menu.Item key="10">权限管理</Menu.Item>
                </SubMenu>
          
            </SubMenu>

            <SubMenu key="sub122" title={<span> <Icon type="user" /><span>平台管理</span></span>}>
                <Menu.Item key="3123"><Link to="/tenantmanager">租户管理</Link></Menu.Item>
                <Menu.Item key="4123">人员管理</Menu.Item>
                <Menu.Item key="533">Alex</Menu.Item>
            </SubMenu>
        </Menu>)
    }
}