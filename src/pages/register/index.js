import React from 'react';

import {StyledSection} from './register-styles';
import Navbar from '../../components/navbar';

import logo from '../../assets/logo.svg';

export default function RegisterPage() {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="main-grid">
                    <div className="main-grid-card">
                        <div className="inner-content">
                            <h3>create</h3>
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-grid-card">
                        <div className="form">
                            <h3 className="form-title">create an account</h3>
                            <p className="form-message">
                                Create your Anstey customer account by filling the required
                                feilds below.
                            </p>

                            <form>
                                <div className="form-group">
                                    <label>username</label>
                                    <input className="input" type="text" placeholder="Enter your username" required/>
                                    <div className="underline"/>
                                </div>
                                <div className="form-group">
                                    <label>email</label>
                                    <input className="input" type="text" placeholder="your_email@example.com" required/>
                                    <div className="underline"/>
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input className="input" type="password" placeholder="Enter your password" required/>
                                    <div className="underline"/>
                                </div>
                                <input className="submit-btn" type="submit" value="CREATE ACCOUNT"/>
                            </form>
                        </div>
                    </div>
                </div>               
            </div>
        </StyledSection>
    )
}
