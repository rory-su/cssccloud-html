import React from 'react';
import styled from 'styled-components';
import { Layout, List, Table,Button } from 'antd'
import ModuleTitle from '../../Components/ModuleTitle';

import CompanyList from '../../../static/json/CompanyList.json'
import UserList from '../../../static/json/UserList.json';
const { Content, Sider } = Layout;
const {Column}=Table;
export default class PlatUserManange extends React.Component {
    componentDidMount(){
        console.log(UserList)
    }
    render() {
        const companylist = CompanyList.map(item => {
            return <List.Item key={item.id}  title={item.name}>{item.name}</List.Item>
        })
        return <Main>
            <ModuleTitle title="平台用户管理" />
            <Layout>
                <Sider theme="light" className="plat_user_sider" width={250}>
                    <CompanyListTitle>租户列表</CompanyListTitle>
                    <List className="plat_user_list" bordered>
                        {companylist}
                    </List>
                </Sider>
                <Content className="plat_user_content">
                   <ModuleTitle title="用户列表" />
                   <UserTableDiv>
                       <UserToolsDiv>
                          <Button type="danger" size="small">删除</Button>&nbsp;
                          <Button type="primary" size="small">启用</Button>
                       </UserToolsDiv>
                      <Table dataSource={UserList} pagination={{pageSize:10}}>
                          <Column title="账号" dataIndex="account" key="account"/>
                          <Column title="姓名" dataIndex="name" key="name"/>
                          <Column title="邮件" dataIndex="email" key="email"/>
                          <Column title="电话" dataIndex="phone" key="phone"/>
                          <Column title="创建时间" dataIndex="create_time" key="create_time"/>
                          <Column title="状态" dataIndex="enable" key="enable" render={(item)=>{return item?"启用":"禁用"}}/>
                          <Column title="操作" render={(record)=>{
                              return(<a>详细</a>)
                          }}/>
                      </Table>
                   </UserTableDiv>
              </Content>
            </Layout>
        </Main>
    }
}
const Main = styled.div`
 width:100%;
 height:100%;
`
const CompanyListTitle=styled.div`
 position:sticky;
 height:42px;
 width:100%;
 line-height:42px;
 text-align:center;
 top:0px;
 z-index:1000;
 background:yellowgreen;
`
const UserTableDiv=styled.div`

`
const UserToolsDiv=styled.div`
  height:50px;
  line-height:50px;
  text-align:right;
  padding-right:10px;
`