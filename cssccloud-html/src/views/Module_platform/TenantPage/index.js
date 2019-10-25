import React from 'react';
import styled from 'styled-components';
import { Button, Table } from 'antd';

import Tenantdata from '../../../static/json/TenantData.json'
import  ModuleTitle  from '../../Components/ModuleTitle';
const { Column } = Table;
export default class Tenant extends React.Component {
    componentDidMount() {
        console.log(Tenantdata)
    }
    render() {
        return <Main>
            <ModuleTitle title="租户管理" />
            <ToolsDiv>
                <Button size="small" type="primary">添加</Button>&nbsp;
                <Button size="small" type="danger">删除</Button>
            </ToolsDiv>
            <CompanyTableDiv>
                <Table bordered dataSource={Tenantdata} pagination={{ pageSize: 5 }}>
                    <Column title="名称" dataIndex="name" key="name" />
                    <Column title="简称" dataIndex="sub_name" key="sub_name" />
                    <Column title="创建时间" dataIndex="create_time" key="create_time" />
                    <Column title="状态" dataIndex="enable" key="enable" render={(item) => { return item ? "启用" : "禁用" }} />
                    <Column title="操作" render={()=>{
                        return<a>启用</a>
                    }}/>
                </Table>
            </CompanyTableDiv>    
        </Main>
    }
}
const Main = styled.div`
  width:100%;
  height:100%;
  padding:0px 10px;
`
const ToolsDiv = styled.div`
  height:40px;
  line-height:40px;
  text-align:right;
  
`
const CompanyTableDiv = styled.div`

`