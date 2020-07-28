import React from 'react';

import {StyledSection} from './login-styles';
import Navbar from '../../components/navbar';

import logo from '../../assets/logo.svg';

export default function LoginPage({history}) {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="main-grid">
                    <div className="main-grid-card">
                        <div className="inner-content">
                            <h3>login</h3>
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-grid-card">
                        <div className="form">
                            <h3 className="form-title">login</h3>
                            <p className="form-message">
                                Please login to continue using Anstey.
                            </p>

                            <form>
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
                                <p className="sub">forgot password</p>
                                <input className="submit-btn" type="submit" value="LOGIN"/>
                            </form>
                        </div>
                        <p className="info">
                            Don't have an Anstey account ? Create one by registering <span onClick={() => history.push('/register')}>Here</span>
                        </p>
                    </div>
                </div>               
            </div>
        </StyledSection>
    )
}
