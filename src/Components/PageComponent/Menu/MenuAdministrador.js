import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs";

export const MenuAdministrador = [
  {
    title: 'Mantenimientos',
    path: '/mantenimiento',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <BsIcons.BsChevronDown/>,
    iconOpened: <BsIcons.BsChevronUp />,
    subNav: [
      {
        title: 'Ciclo',
        path: '/mantenimiento/curso',
      },
      {
        title: 'Departamento',
        path: '/mantenimiento/departamento',
      },
      {
        title: 'Seccion',
        path: '/mantenimiento/seccion',
      }
    ]
  }
];