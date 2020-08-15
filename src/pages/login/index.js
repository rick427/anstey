import React, {useState} from 'react';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import {StyledSection} from './login-styles';
import {loginUser} from '../../redux';
import Navbar from '../../components/navbar';

import logo from '../../assets/logo.svg';

const LoginPage = ({history, login, loading}) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleLogin = e => {
        e.preventDefault();
        login(user);
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

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

                            <Spin indicator={antIcon} spinning={loading}>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label>email</label>
                                        <input 
                                          className="input" 
                                          type="text"
                                          name="username" 
                                          value={user.username} 
                                          onChange={handleChange}
                                          placeholder="Enter your email" 
                                          required
                                        />
                                        <div className="underline"/>
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input 
                                          className="input" 
                                          type="password" 
                                          name="password"
                                          value={user.password} 
                                          onChange={handleChange}
                                          placeholder="Enter your password" 
                                          required
                                        />
                                        <div className="underline"/>
                                    </div>
                                    <p className="sub">forgot password</p>
                                    <input className="submit-btn" type="submit" value="LOGIN"/>
                                </form>
                            </Spin>
                        </div>

                        <p className="info">
                            Don't have an Anstey account ? Create one <span onClick={() => history.push('/register')}>Here</span>
                        </p>
                    </div>
                </div>               
            </div>
        </StyledSection>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: data => dispatch(loginUser(data, ownProps))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage); 