import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store';
import { GlobalStyle } from './styles';
import Scrollbars from 'react-custom-scrollbars';
import {HashRouter,Switch,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import MainPage from './views/MainPage'
import LoginPage from './views/LoginPage'


ReactDOM.render(
<Provider store={store}>
    <GlobalStyle/>
    <Scrollbars/>
     <HashRouter>
       <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/" component={MainPage}/>
       </Switch>
      </HashRouter>
    {/* </Scrollbars> */}
   </Provider>, document.getElementById('root'));
