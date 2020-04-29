import React from "react";
import NavMenu from "./NavMenu";

const ButtonMenu = () => {

    const handleNav = (event) => {
        let wrapper = document.querySelector('.button-wrapper');
        if(wrapper.classList.contains('open')) { 
            wrapper.classList.remove('open');
        } else {
            wrapper.classList.add('open');
        }
    }

    return (
        <div className="button-wrapper" onClick={handleNav}>
            <div className="burger-wrapper">
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </div>
            <div className="menu-backdrop"></div>
            <NavMenu />
        </div>
    )
}

export default ButtonMenu;