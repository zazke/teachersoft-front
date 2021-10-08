import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLabel = styled.span`
  margin-left: 16px;
  border-radius: 0px 25px 25px 0px;
`;

const DropdownLink = styled(Link)`
  background: #fff;
  height: 50px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #3B4A81;
  border-radius: 0px 25px 25px 0px;
  font-size: 16px;
  font-family: Quicksand;
  font-style: Medium;

  &:hover {
    background: #3B4A8160;
    cursor: pointer;
    filter: drop-shadow(0px 1px 3px rgba(65, 185, 228, 0.51));
    color: #fff;
  }
`;


const SubMenu = ({ inactivo,item}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  }
  console.log(inactivo)
  return (
    <>
      <div className={`SidebarLink ${subnav? "selected": inactivo? "comprimido":""} `} to={item.path} onClick={item.subNav && showSubnav} >
        <div className={`Menu ${inactivo? "comprimido":""}`}>
          {item.icon}
            <span>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened 
            : item.subNav && !inactivo
            ? item.iconClosed
            : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;