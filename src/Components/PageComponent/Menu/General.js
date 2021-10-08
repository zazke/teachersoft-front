import React, { useState, useContext } from "react";
import styled from 'styled-components';
import { MenuAdministrador } from './MenuAdministrador';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './Menu.css'


const SidebarWrap = styled.div`
  width: 100%;
`;

const General = ({inactive}) => {
  console.log(inactive)

  return(
    <IconContext.Provider value={{ color: '#3B4A81' }}>
        <div className={`SidebarNav ${inactive? "comprimido":""}`}>
            <SidebarWrap>
                {MenuAdministrador.map((item, index) => {
                return <SubMenu  inactivo={inactive} item={item} key={index}/>;
                })}
            </SidebarWrap>
        </div>
    </IconContext.Provider>
  );
  
};

export default General;