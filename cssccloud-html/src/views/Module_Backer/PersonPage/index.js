import React from 'react';
import styled from 'styled-components';
import { Layout, Tree, Icon,Input ,Table} from 'antd';
import UserList from '../../../static/json/UserList.json';
const { Sider, Content } = Layout;
const { TreeNode, DirectoryTree } = Tree;
const { Search } = Input;
const {Column}=Table;

export default class PersonPage extends React.Component{
    render(){
        return<Main>
        <Layout>
            <Sider theme="light" width={250} className="person_sider" collapsible={true}>
               <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={()=>{console.log()}} />
                <DirectoryTree multiple  onSelect={this.onSelect} onExpand={this.onExpand} showIcon={false} >
                    <TreeNode title="广州黄埔文冲船舶有限公司" key="0-0" icon={<Icon type="smile-o" />}>
                        <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                        <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                    </TreeNode>
                    <TreeNode title="广州文冲船舶有限公司" key="0-1">
                        <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                        <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                    </TreeNode>
                    <TreeNode title="广州文冲船舶有限公司" key="0-2">
                        <TreeNode title="leaf 2-0" key="0-2-0" isLeaf />
                        <TreeNode title="leaf 2-1" key="0-2-1" isLeaf />
                    </TreeNode>
                    <TreeNode title="广州文冲船舶有限公司" key="0-3">
                        <TreeNode title="leaf 3-0" key="0-3-0" isLeaf />
                        <TreeNode title="leaf 3-1" key="0-3-1" isLeaf />
                    </TreeNode>
                </DirectoryTree>
                <ToggleButton>

                </ToggleButton>
            </Sider>
            <Content className="person_content">
                <Table dataSource={UserList} pagination={{pageSize:5}}>
                   <Column title="账号" dataIndex="account" key="account" />
                   <Column title="姓名" dataIndex="name" key="name" />
                   <Column title="性别" dataIndex="sex" key="sex" render={(item)=>{return item==0?"女":"男"}}/>
                   <Column title="部门" dataIndex="dept" key="dept"/>
                   <Column title="邮件" dataIndex="email" key="email"/>
                   <Column title="电话" dataIndex="phone" key="phone"/>
                   <Column title="创建时间" dataIndex="create_time" key="create_time"/>
                   <Column title="状态" dataIndex="enable" key="enable" render={(item)=>{return item?"启用":"禁用"}}/>
                   <Column title="操作" render={(record)=>{
                       return<a>操作</a>
                   }}/>
                </Table>
            </Content>
        </Layout>

    </Main>
    }
}
const Main = styled.div`
  width:100%;
  height:100%;
`
const ToggleButton=styled.div`
 width:50px;
 height:100px;
 background:yellow;
 position:absolute;
 
`
