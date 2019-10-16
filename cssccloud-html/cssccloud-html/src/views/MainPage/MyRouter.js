import React from 'react';
import {Switch,Route} from 'react-router-dom';

import HomePage from "../HomePage"//首页

export default class MyRouter extends React.Component{
    render(){
        return(<Switch>
        <Route path="/" component={HomePage}/>
     </Switch>)
    }
}