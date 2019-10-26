import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';

import InstitutionPage from '../InstitutionPage';//机构信息
import DeptmentPage from '../DeptmentPage';//部门信息
import PersonPage from '../PersonPage';//人员信息
const { TabPane } = Tabs;
export default class HumanResourcePage extends React.Component {
    render() {
        return <Main>
            <Tabs className="humanResourceTabs" defaultActiveKey="3" onChange={(key)=>{console.log(key)}}>
                <TabPane tab="机构信息" key="1">
                    <InstitutionPage/>
                </TabPane>
                <TabPane tab="部门信息" key="2">
                    <DeptmentPage/>
               </TabPane>
                <TabPane tab="人员信息" key="3">
                    <PersonPage/>
               </TabPane>
            </Tabs>

        </Main>
    }
}
const Main = styled.div`
 width:100%;
 height:100%;

`