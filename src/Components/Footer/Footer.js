import React from 'react';
import facebook from "../../assets/Images/facebook.png";
import github from "../../assets/Images/github.png";
import linkedin from "../../assets/Images/linkedin.png";
import twitter from "../../assets/Images/twitter.png";
import whatsapp from "../../assets/Images/whatsapp.png";
import './Footer.css';

const Footer = () =>{
    return(
        <div className = "main-footer">
            <div className = "container">
                <img className = "fb"   src={facebook} alt=""/>
                <img className = "gb" src={github} alt=""/>
                <img className = "lk" src={linkedin} alt=""/>
                <img className = "tw" src={twitter} alt=""/>
                <img className = "wpp" src={whatsapp} alt=""/>
            </div>
        </div>
    )
}

export default Footer;