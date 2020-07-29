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

                <div className="checkout-grid">
                    <div className="checkout-card tall">1</div>
                    <div className="checkout-card tall-sm">2</div>
                </div>
            </div>
        </StyledSection>
    )
}
