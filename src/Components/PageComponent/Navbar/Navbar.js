import React from 'react'

import './Navbar.css'
import LogoPucp from '../../../assets/Images/LogoPUCP.png'

const Navbar = ()=>{
        return(
            <nav className="NavbarItems">
                <div className="menu-icon">
                    <img className="menu-image" src= {LogoPucp} alt=""></img>
                </div>
            </nav>
            
        )
}

export default Navbar