import React from 'react';
import {GoTrashcan} from 'react-icons/go';

import {StyledSection} from './cart-styles';
import Navbar from '../../components/navbar';

import prod1 from '../../assets/g-8.jpg';
import prod2 from '../../assets/g-18.jpg';
import Picker from '../../components/picker';

const CartPage = () => {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="breadcrumb">
                    <p className="breadcrumb-link">home <span>| cart</span></p>
                    <div className="flex">   
                        <p className="breadcrumb-text">
                            my cart (3)
                        </p>
                    </div>
                </div>

                <div className="cart">
                    <div className="cart-card">
                        <div className="cart-items">
                            <img src={prod1} alt="product"/>
                            <div className="info">
                                <h3>oxford enterprise xamarin bedroom</h3>
                                <p>Item Price:  <span>&#8358;120,000.00</span></p>
                                <p>Item Color:  <span className="error">Not Provided</span></p>
                               <div className="flex">
                                  <Picker/>
                                  <span className="delete">
                                      <GoTrashcan/>
                                  </span>
                               </div>
                                <p className="total">
                                    Total: <span className="ml-2">&#8358;120,000.00</span></p>
                            </div>
                        </div>
                        <div className="cart-items">
                            <img src={prod2} alt="product"/>
                            <div className="info">
                                <h3>headache xamarin pills</h3>
                                <p>Item Price:  <span>&#8358;6,000.00</span></p>
                                <p>Item Color:  <span className="error">purple</span></p>
                               <div className="flex">
                                  <Picker/>
                                  <span className="delete">
                                      <GoTrashcan/>
                                  </span>
                               </div>
                                <p className="total">
                                    Total: <span className="ml-2">&#8358;6,000.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="confirm">
                        <h3>cart summary</h3>
                        <div className="flex">
                            <h4>subtotal</h4>
                            <p>&#8358;126,000.00</p>
                        </div>
                        <div className="flex">
                            <h4>total</h4>
                            <p>&#8358;126,000.00</p>
                        </div>
                        <button>proceed to checkout</button>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default CartPage
