import React from 'react';

import logo from '../../assets/logo.svg';
import {StyledDiv} from './header-styles';

export default function Header({current}) {
    return (
        <StyledDiv>
            <div className="logo">
                <img src={logo} alt="alt"/>
            </div>
            <p className="breadcrumb-link">home |<span> {current}</span></p>
        </StyledDiv>
    )
}
