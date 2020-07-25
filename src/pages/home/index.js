import React, {useState} from 'react';
import {IoLogoWhatsapp, IoIosSearch} from 'react-icons/io';

import logo from '../../assets/logo.svg';
import banner1 from '../../assets/b-1.jpg';
import banner2 from '../../assets/b-2.jpg';
import banner3 from '../../assets/b-3.jpg';
import infoBanner from '../../assets/ban.jpg';
import contact from '../../assets/contact.jpg';
import sponser from '../../assets/sponser.png';
import sponser2 from '../../assets/sponser-2.png';

import {StyledSection} from './home-styles';
import Navbar from '../../components/navbar';
import colors from '../../utils/colors';

export default function HomePage() {
    const [tabs, setTabs] = useState(1);

    const handleTabs = (id) => {
        setTabs(id);
    }

    const checkActive = () => {
        if(tabs === 1) return {background: colors.offGreen, color: colors.primary};
    }
    const checkActive2 = () => {
        if(tabs === 2) return {background: colors.offGreen, color: colors.primary};
    }
    const checkActive3 = () => {
        if(tabs === 3) return {background: colors.offGreen, color: colors.primary};
    }

    return (
        <StyledSection banner={infoBanner}>
            <Navbar/>

            <div className="main">
                <header className="header">
                    <div className="header-box flex-center">
                        <img src={logo} className="logo" alt="app logo"/>
                    </div>
                    <div className="header-box flex-center">
                        <div className="contact">
                            <span>
                              <IoLogoWhatsapp/>
                            </span>
                            <p>1300-651-796</p>
                        </div>
                    </div>
                </header>

                <div className="search">
                    <input type="text" placeholder="i know what am searching for"/>
                    <span>
                        <IoIosSearch/>
                    </span>
                </div>

                <div className="tabs">
                    <div style={checkActive()} onClick={() => handleTabs(1)} className="tab">
                        <p>help me find what i need</p>
                    </div>
                    <div style={checkActive2()} onClick={() => handleTabs(2)} className="tab">
                        <p>book in a consultation</p>
                    </div>
                    <div style={checkActive3()} onClick={() => handleTabs(3)} className="tab">
                        <p>just browsing</p>
                    </div>
                </div>

                <div className="tabs-content">
                    <div className="tabs-box center">
                        <img src={tabs === 1 ? banner1 : tabs === 2 ? banner2 : banner3} alt="banner"/>
                    </div>
                    <div className="tabs-box flex-column">
                        <h2>lorem ipsum dolor superhuman fiat</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                        <button>contact us</button>
                    </div>
                </div>

                <div className="info">
                    <p>
                        Australia's one stop shop for <span className="caps">All</span>
                        {' '}
                        your healthcare needs. we stock everything from
                        maternity to mobility. Affectionately referred to 
                        as <span className="alt">"The Bunnings"</span> of healthcare. If it's not in stock
                        we'll find it !
                    </p>

                    <div className="sponsers">
                        <img src={sponser} alt="sponser"/>
                        <img src={sponser2} alt="sponser"/>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer-box text">
                        <h2>Located in two convenient locations here in Australia.</h2>

                        <div className="address">
                            <h3>02 4040 6161</h3>
                            <p>70 brunker road, broadmeadow NSW 2292</p>
                        </div>
                        <div className="address">
                            <h3>02 4058 1300</h3>
                            <p>4/25 mitchell driver, east maitland NSW 2323</p>
                        </div>
                        <div>
                            <h3>opening hours</h3>

                            <div className="flex">
                                <p className="day">Mon-Fri</p>
                                <p className="time">| 8:30 A.M - 5:00 P.M</p>
                            </div>
                            <div className="flex">
                                <p className="day">Saturdays</p>
                                <p className="time">| 9:00 A.M - 12:00 P.M</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-box">
                        <img src={contact} alt="contact"/>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}
