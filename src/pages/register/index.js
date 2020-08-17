import React, {useState} from 'react';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import {StyledSection} from './register-styles';
import Navbar from '../../components/navbar';
import {registerUser} from '../../redux';

import logo from '../../assets/logo.svg';

const RegisterPage = ({history, register, loading}) => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email_address: '',
        password: '',
        phone_number: '',
        role_id: 3
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        register(user);
    }

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

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

                            <Spin indicator={antIcon} spinning={loading}>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>name</label>
                                        <input className="input" name="name" type="text" value={user.name} onChange={handleChange} placeholder="Enter your name" required/>
                                        <div className="underline"/>
                                    </div>
                                    <div className="form-group">
                                        <label>username</label>
                                        <input className="input" name="username" type="text" value={user.username} onChange={handleChange} placeholder="Enter your username" required/>
                                        <div className="underline"/>
                                    </div>
                                    <div className="form-group">
                                        <label>email</label>
                                        <input className="input" name="email_address" type="email" value={user.email_address} onChange={handleChange} placeholder="Enter your email" required/>
                                        <div className="underline"/>
                                    </div>
                                    <div className="form-group">
                                        <label>password</label>
                                        <input className="input" name="password" type="password" value={user.password} onChange={handleChange} placeholder="Enter your password" required/>
                                        <div className="underline"/>
                                    </div>
                                    <div className="form-group">
                                        <label>phone number</label>
                                        <input className="input" name="phone_number" type="number" value={user.phone_number} onChange={handleChange} placeholder="Enter your phone number" required/>
                                        <div className="underline"/>
                                    </div>
                                    <input className="submit-btn" type="submit" value="CREATE ACCOUNT"/>
                                </form>
                            </Spin>
                            <p className="info">
                                Already have an account ? Login <span onClick={() => history.push('/login')}>Here</span>
                            </p>
                        </div>
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
    register: data => dispatch(registerUser(data, ownProps))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage); 
