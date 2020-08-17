import React from 'react';
import {Badge} from 'antd';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {AiOutlineHome, AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout, AiOutlineFileProtect, AiFillUnlock} from 'react-icons/ai';
import {RiWhatsappLine, RiStore3Line} from 'react-icons/ri';
import {GiThreeLeaves} from 'react-icons/gi';

import {useDispatch} from 'react-redux';
import {logoutUser} from '../../redux';

import AuthService from '../../services/authentication_service';

import {StyledNav} from './navbar-styles';
import colors from '../../utils/colors';

export default function Navbar() {
    //const userData = useSelector(state => state.auth.userData);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    // useEffect(() => {
    //     //@: log nothing
    // },[userData]);

    const checkActive = (path) => {
        if(location.pathname === path){
            return {background: `${colors.offGreen}`, color: `${colors.primary}`}
        }
        return;
    }

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/login');
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

                {AuthService.hasSession() && 
                <li className="nav-item">
                    <Link to="/products" style={checkActive('/products')} className="nav-link">
                        <span><RiStore3Line/></span>
                        <p className="link-text">store</p>
                    </Link>
                </li>}

                <li className="nav-item">
                    <Link to="/cart" style={checkActive('/cart')} className="nav-link">
                        <span><AiOutlineShoppingCart/></span>
                        <p className="link-text">cart</p>
                    </Link>
                </li>

                {!AuthService.hasSession() && 
                <li className="nav-item">
                    <Link to="/login" style={checkActive('/login')} className="nav-link">
                        <span><AiOutlineLogin/></span>
                        <p className="link-text">login</p>
                    </Link>
                </li>}

                {AuthService.hasSession() && 
                <li className="nav-item">
                    <span to="/login" style={checkActive('/login')} className="nav-link" onClick={handleLogout}>
                        <span><AiOutlineLogout/></span>
                        <p className="link-text">logout</p>
                    </span>
                </li>}

                {AuthService.getRole() === 'SUPER_ADMIN' &&
                <li className="nav-item">
                    <Link to="/main/dashboard/admin" style={checkActive('/main/dashboard/admin')} className="nav-link">
                        <span><AiOutlineFileProtect/></span>
                        <p className="link-text">Dashboard</p>
                    </Link>
                </li>}
                
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <span>
                            {AuthService.hasSession() ? <AiFillUnlock/> : <RiWhatsappLine/>}
                        </span>
                        <p className="link-text">
                            {AuthService.hasSession() ? AuthService.getRole() : 'whatsapp'}
                        </p>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    )
}
