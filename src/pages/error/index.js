import React from 'react';

import {StyledSection} from './error-styles';
import Navbar from '../../components/navbar';

export default function ErrorPage({history}) {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="error">
                    <h1 className="heading">HTTPS : 404</h1>
                    <p className="emp">UH OH !! You're Lost.</p>

                    <p>Maybe this page moved ? Got deleted ? Is hiding out in quarantine{' '} 
                        <span role="img" aria-label="emoji">&#128567;</span> ? 
                        Never existed in the first place ?
                    </p>
                    <p>Lets go <span onClick={() => history.push('/')}>home</span> and try from there.</p> 
                </div>         
            </div>
        </StyledSection>
    )
}
