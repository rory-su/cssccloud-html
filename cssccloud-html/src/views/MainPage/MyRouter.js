import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from "../HomePage"//首页

//后台管理
import InstitutionPage from '../Module_Backer/InstitutionPage';//组织机构管理
import PersonPage from '../Module_Backer/PersonPage';//人员管理
import MenuPage from '../Module_Backer/MenuPage';//菜单管理
import AuthorityPage from '../Module_Backer/AuthorityPage';//权限管理
// 平台管理
import TenantPage from '../Module_platform/TenantPage'//租户管理界面
import PlatUserManange from '../Module_platform/UserPage'//平台用户管理
import LogPage from '../Module_platform/LogPage';//日志管理

export default class MyRouter extends React.Component{
    render(){
        return(
        <Switch>
        {/* 后台管理 */}
        <Route path="/institution" component={InstitutionPage}/>
        <Route path="/persons" component={PersonPage}/>
        <Route path="/menus" component={MenuPage}/>
        <Route path="/authority" component={AuthorityPage}/>
        {/*平台管理*/}
        <Route path="/tenantmanager" component={TenantPage}/>
        <Route path="/platusermanange" component={PlatUserManange}/>
        <Route path="/logpage" component={LogPage}/>

        <Route path="/" component={HomePage}/>
     </Switch>)
    }
}