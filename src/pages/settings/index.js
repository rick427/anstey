import React from 'react';
import {StyledSection} from './settings-styles';
import Navbar from '../../components/navbar';

const SettingsPage = () => {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <p>SETTINGS PAGE</p>
            </div>
        </StyledSection>
    )
}

export default SettingsPage
