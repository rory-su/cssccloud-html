import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from "../HomePage"//首页
import TenantPage from '../TenantPage'//租户管理界面

export default class MyRouter extends React.Component{
    render(){
        return(
        <Switch>
        <Route path="/tenantmanager" component={TenantPage}/>
        <Route path="/" component={HomePage}/>
     </Switch>)
    }
}