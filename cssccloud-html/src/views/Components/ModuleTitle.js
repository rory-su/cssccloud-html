import React from 'react';
import styled from 'styled-components';

 const ModuleTitle=(props)=>{
    return<Title>
        {props.title}
    </Title>
}
const Title=styled.div`
   height:40px;
   line-height:40px;
   font-size:15px;
   font-weight:bold;
`
export default ModuleTitle;
