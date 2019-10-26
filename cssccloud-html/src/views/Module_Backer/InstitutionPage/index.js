import React from 'react';
import styled from 'styled-components';
import {Button, Icon,Table} from 'antd';
import InstitutionList from '../../../static/json/InstitutionList.json';
const {Column}=Table; 
export default class InstitutionPage extends React.Component{
    
    render(){
        return<Main>
            <TopToolsDiv>
              <Button type="primary"><Icon type="plus" />新增</Button>&nbsp;
              <Button type="primary"><Icon type="upload" />导入机构</Button>&nbsp;
              <Button type="primary"><Icon type="download" />下载模板</Button>
            </TopToolsDiv>
            <TableDiv>
             <Table dataSource={InstitutionList}>
                 <Column  title="机构名称" dataIndex="name" key="name"/>
                 <Column  title="负责人" dataIndex="boss" key="boss"/>
                 <Column  title="状态" dataIndex="enable" key="enable" render={(item)=>{return item?"启用":"禁用"}}/>
             </Table>
            </TableDiv>
            </Main>
    }
}
const Main=styled.div`
 width:100%;
 height:100%;
`
const TopToolsDiv=styled.div`
 height:50px;
 line-height:50px;
`
const TableDiv=styled.div`

`