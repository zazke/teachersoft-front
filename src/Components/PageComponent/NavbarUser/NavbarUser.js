import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@mui/styles';
import './NavbarUser.css'
import logout from '../../../assets/Images/log-out.png'
import * as BsIcons from "react-icons/bs";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-body1': {
            opacity: '0.6'
        }
    }
}))

const NavbarUser = ({inactivo, nombre, rol, foto}) => {
    nombre = "hola mundo"
    const [inactive, setInactive] = useState(false);
    const show= (e) =>{
      console.log(inactive)
      setInactive(!inactive);
      inactivo=!inactive;
    }
        return(
            <nav className="NavbarUserItems">
                <div className="iconList"> <BsIcons.BsList size='30px' onClick={show} /> </div>
                <div className="divider"> </div>
                <div className="profileNb">
                    <img className="prof-photo" src={foto} alt=""></img>
                    <text className="prof-name">{nombre}</text>
                    <text className="prof-rol">{rol}</text>
                </div>

                <div className="Umenu-icon">
                    <a href="#" className="logout">
                        <text className="loText">Cerrar Sesión</text>
                        <img className="Umenu-image" src= {logout} alt=""></img>
                    </a>
                </div>
            </nav>  
            
        )
}

export default NavbarUser