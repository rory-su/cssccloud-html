import {createGlobalStyle } from 'styled-components';
export const GlobalStyle =createGlobalStyle `

html,body{
	width: 100%;
	height: 100%;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* 滚动条 */
::-webkit-scrollbar {
            width: 4px;    
            height: 4px;
}
::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);

}

/* 自定义 */
/* 登录页面 */
.loginSection{
	padding-bottom: 0px!important;
} 
/* 登录页面 */
.mainTop{
	height:50px !important;	
	line-height:50px !important;
	background:white !important;
	box-shadow: rgba(94, 94, 94, 0.5) 0px 10px 20px -20px;
	padding:0 20px !important;
}
.username{
  position:relative;
  top:2px;
}
.myMenuSider{
  height:calc(100vh - 50px) !important;
  overflow:auto;
  padding-bottom:100px !important;
}
.myMenuSider .ant-menu{
	padding-bottom:50px;
}

/* 平台管理_用户管理 */
.plat_user_sider{
	
}
.plat_user_sider .ant-layout-sider-children{
	position:relative;
	overflow: auto;
	padding:0 2px;
	height: calc(100vh - 160px);
}

.plat_user_sider .ant-list-item{
	overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.plat_user_content{
	background:white;
	padding-left:10px;
}

/* 平台管理_用户管理 end */

`
