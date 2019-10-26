import React from 'react';
import styled from 'styled-components';
import { Layout, Tree, Icon, Descriptions,Input  } from 'antd';
const { Sider, Content } = Layout;
const { TreeNode, DirectoryTree } = Tree;
const { Search } = Input;
export default class DeptmentPage extends React.Component {
    render() {
        return <Main>
            <Layout>
                <Sider theme="light" width={250} className="deptment_sider">
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
                </Sider>
                <Content className="deptment_content">
                    <MyTitle>
                          部门信息
                    </MyTitle>
                    <Descriptions title="基本信息" column={3}>
                        <Descriptions.Item label="名称">财务部</Descriptions.Item>
                        <Descriptions.Item label="简称">财务部</Descriptions.Item>
                        <Descriptions.Item label="所属机构">广州黄埔文冲船舶有限公司</Descriptions.Item>
                        <Descriptions.Item label="所属部门">顶级部门</Descriptions.Item>
                        <Descriptions.Item label="办公电话">202-123456</Descriptions.Item>
                        <Descriptions.Item label="传真">202-123456</Descriptions.Item>
                    </Descriptions>
                </Content>
            </Layout>
        </Main>
    }
}
const Main = styled.div`
  width:100%;
  height:100%;
`
const MyTitle=styled.div`
  height:50px;
  line-height:50px;
  font-size:16px;
`