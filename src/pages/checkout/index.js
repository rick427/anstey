import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import {StyledSection} from './checkout-styles';

import g6 from '../../assets/h-4.jpg';
import g7 from '../../assets/g-16.jpg';
import g8 from '../../assets/g-20.jpg';
import g9 from '../../assets/g-18.jpg';

export default function CheckOutPage() {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <Header current="checkout"/>

                <div className="checkout-grid">
                    <div className="checkout-card tall">
                        <div className="inner-card">
                            <h3 className="title">checkout</h3>

                            <div className="top-card">
                                <div className="top-heading">
                                    <div className="top-left">
                                        <span><AiFillCheckCircle/></span>
                                        <h3>address details</h3>
                                    </div>
                                    <h3 className="top-action">change</h3>
                                </div>
                                <h4>kirigaya kazuhito</h4>
                                <p>
                                    Anstey Australia Limited, World trade center, 
                                    20th floor, Constituition Avenue, Central area, 
                                    Abuja-Central, Federal Capital Territory
                                </p>
                            </div>

                            <form>
                                <div className="form-flex">
                                    <div className="form-group">
                                        <label>first name</label>
                                        <input type="text" placeholder="Enter first name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>last name</label>
                                        <input type="text" placeholder="Enter last name" required/>
                                    </div>
                                </div>
                                <div className="form-group full">
                                    <label>company name</label>
                                    <input type="text" placeholder="Enter company name" required/>
                                </div>
                                <div className="form-group full">
                                    <label>select a country</label>
                                    <input type="text" placeholder="select country" required/>
                                </div>
                                <div className="form-group full">
                                    <label>street address</label>
                                    <input type="text" placeholder="house number and street name" required/>
                                    <input className="mt" type="text" placeholder="apartment, suite, unit etc." required/>
                                </div>
                                <div className="form-group full">
                                    <label>town / city</label>
                                    <input type="text" placeholder="Enter town or city" required/>
                                </div>
                                <div className="form-flex">
                                    <div className="form-group">
                                        <label>state / country</label>
                                        <input type="text" placeholder="Enter country or state" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>postcode / ZIP</label>
                                        <input type="text" placeholder="Enter postcode or zip code" required/>
                                    </div>
                                </div>
                                <div className="form-flex">
                                    <div className="form-group">
                                        <label>phone</label>
                                        <input type="text" placeholder="Enter phone number" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>email</label>
                                        <input type="text" placeholder="Enter email address" required/>
                                    </div>
                                </div>
                                <div className="form-group full">
                                    <label>addition information</label>
                                    <input className="info" type="text" placeholder="Enter additional information" required/>
                                </div>
                                <button>proceed to payment</button>
                            </form>
                        </div>
                    </div>

                    <div className="checkout-card tall-sm">
                        <div className="summary">
                            <h3 className="summary-header">order summary (4)</h3>

                            <div className="order">
                                <div className="order-img">
                                    <img src={g6} alt="order-product"/>
                                </div>
                                <div className="order-info">
                                    <h3>oxyford lanford automated bed</h3>
                                    <p>&#8358; 60.00</p>
                                    <p>Quantity: x2</p>
                                    <p>xamarin bedded crips sheets</p>
                                </div>
                                <div className="order-price">
                                    <p>&#8358; 120,000.00</p>
                                </div>
                            </div>
                            <div className="order">
                                <div className="order-img">
                                    <img src={g7} alt="order-product"/>
                                </div>
                                <div className="order-info">
                                    <h3>gas mask of the twilight zone</h3>
                                    <p>&#8358; 50.00</p>
                                    <p>Quantity: x2</p>
                                    <p>selenium bedded crips sheets</p>
                                </div>
                                <div className="order-price">
                                    <p>&#8358; 100,000.00</p>
                                </div>
                            </div>
                            <div className="order">
                                <div className="order-img">
                                    <img src={g8} alt="order-product"/>
                                </div>
                                <div className="order-info">
                                    <h3>paracetmol redux inducer</h3>
                                    <p>&#8358; 10,000.00</p>
                                    <p>Quantity: x1</p>
                                    <p>springboot bedded crips sheets</p>
                                </div>
                                <div className="order-price">
                                    <p>&#8358; 10,000.00</p>
                                </div>
                            </div>
                            <div className="order">
                                <div className="order-img">
                                    <img src={g9} alt="order-product"/>
                                </div>
                                <div className="order-info">
                                    <h3>paracetmol context relaxer</h3>
                                    <p>&#8358; 20,000.00</p>
                                    <p>Quantity: x4</p>
                                    <p>jenkins bedded crips sheets</p>
                                </div>
                                <div className="order-price">
                                    <p>&#8358; 80,000.00</p>
                                </div>
                            </div>

                            <div className="order-summary">
                                <div className="inner-flex">
                                    <p>subtotal:</p>
                                    <p>&#8358; 230,000</p>
                                </div>
                                <div className="inner-flex">
                                    <p>promo code applied:</p>
                                    <p>&#8358; -20,000</p>
                                </div>
                                <div className="inner-flex">
                                    <p>shipping anf handling tax:</p>
                                    <p>&#8358; 3,000</p>
                                </div>
                                <div className="inner-flex">
                                    <p>estimated tax:</p>
                                    <p>&#8358; 5,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </StyledSection>
    )
}
