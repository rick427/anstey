import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AiOutlineHome, AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai';
import {RiWhatsappLine, RiStore3Line} from 'react-icons/ri';
import {GiThreeLeaves} from 'react-icons/gi';

import {StyledNav} from './navbar-styles';
import colors from '../../utils/colors';

export default function Navbar() {
    const location = useLocation();

    const checkActive = (path) => {
        if(location.pathname === path){
            return {background: `${colors.offGreen}`, color: `${colors.primary}`}
        }
        return;
    }

    return (
        <StyledNav>
            <ul className="navbar-nav">
                <li className="logo">
                    <Link to="/" className="nav-link">
                        <span className="app-logo"><GiThreeLeaves/></span>
                        <p className="app-logo-text">Anstey</p>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/" style={checkActive('/')} className="nav-link">
                        <span><AiOutlineHome/></span>
                        <p className="link-text">home</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" style={checkActive('/products')} className="nav-link">
                        <span><RiStore3Line/></span>
                        <p className="link-text">store</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                        <span><AiOutlineShoppingCart/></span>
                        <p className="link-text">cart</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        <span><AiOutlineSetting/></span>
                        <p className="link-text">settings</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <span><RiWhatsappLine/></span>
                        <p className="link-text">whatsapp</p>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    )
}
