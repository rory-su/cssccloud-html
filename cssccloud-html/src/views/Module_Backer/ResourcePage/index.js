import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;
export default class ResourcePage extends React.Component {
    render() {
        return <Main>
            <Tabs className="humanResourceTabs" defaultActiveKey="1" onChange={(key) => { console.log(key) }}>
                <TabPane tab="角色管理" key="1">
                    角色管理
                </TabPane>
                <TabPane tab="菜单管理" key="2">
                    菜单管理
                </TabPane>
                <TabPane tab="菜单权限" key="3">
                    菜单权限
                </TabPane>
                <TabPane tab="接口管理" key="4">
                    接口管理
                </TabPane>
                <TabPane tab="接口权限" key="5">
                    权限管理
                </TabPane>
            </Tabs></Main>
    }
}
const Main = styled.div`
 width:100%;
 height:100%;

`