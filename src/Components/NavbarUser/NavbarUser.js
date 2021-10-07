import React from 'react'

import './NavbarUser.css'
import logout from '../../assets/Images/log-out.png'


const NavbarUser = ({nombre, rol, foto}) => {
        return(
            <nav className="NavbarUserItems">

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