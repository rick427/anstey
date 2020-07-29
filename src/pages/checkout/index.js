import React from 'react';

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import {StyledSection} from './checkout-styles';

export default function CheckOutPage() {
    return (
        <StyledSection>
            <Navbar/>
            
            <div className="main">
                <Header current="checkout"/>
            </div>
        </StyledSection>
    )
}
