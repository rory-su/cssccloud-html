import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from "../HomePage"//首页

//后台管理
import HumanResourcePage from '../Module_Backer/HumanResourcePage';//人力资源管理
import ResourcePage from '../Module_Backer/ResourcePage';//资源管理
// 平台管理
import TenantPage from '../Module_platform/TenantPage'//租户管理界面
import PlatUserManange from '../Module_platform/UserPage'//平台用户管理
import LogPage from '../Module_platform/LogPage';//日志管理

export default class MyRouter extends React.Component{
    render(){
        return(
        <Switch>
        {/* 后台管理 */}
        <Route path="/humanresource" component={HumanResourcePage}/>
        <Route path="/resource" component={ResourcePage}/>
        
        {/*平台管理*/}
        <Route path="/tenantmanager" component={TenantPage}/>
        <Route path="/platusermanange" component={PlatUserManange}/>
        <Route path="/logpage" component={LogPage}/>

        <Route path="/" component={HomePage}/>
     </Switch>)
    }
}