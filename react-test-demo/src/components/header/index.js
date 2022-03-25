import React from "react";
import './styles.scss'
import Logo from '../../assets/graphics/logo.png'

const Header = (props) => {
    return (
        <header data-test="headerComponent" className="headerComponent">
            <div data-test="wrap" className="wrap">
                <div data-test="logo" className="logo">
                    <img data-test="logoIMG" src={Logo} alt="Logo"/>
                </div>
            </div>
        </header> 
    )
} 

export default Header;