import React from 'react';
import {BsTrash} from 'react-icons/bs';
import {FiAlertCircle} from 'react-icons/fi';

import {StyledSection} from './cart-styles';
import Navbar from '../../components/navbar';

import prod1 from '../../assets/h-3.jpg';
import prod2 from '../../assets/g-18.jpg';
import prod3 from '../../assets/g-16.jpg';
import Picker from '../../components/picker';

const CartPage = ({history}) => {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="breadcrumb">
                    <p className="breadcrumb-link">home <span>| my cart</span></p>
                    {/* <div className="flex">   
                        <p className="breadcrumb-text">
                            my cart (3)
                        </p>
                    </div> */}
                </div>

                <div className="cart">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>product</th>
                                <th>name</th>
                                <th>description</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={prod1} alt="product"/>
                                </td>
                                <td className="w-25 name">oxyford bedroom</td>
                                <td className="w-30">NXA xamarin enterprise bedroom.</td>
                                <td>&#8358;88,100</td>
                                <td>
                                    <Picker/>
                                </td>
                                <td className="total">&#8358;88,100</td>
                                <td><span><BsTrash/></span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={prod2} alt="product"/>
                                </td>
                                <td className="w-25 name">synaptic nerves inducer P10</td>
                                <td className="w-30">Brain optimizer and pain killers. Only for adults.</td>
                                <td>&#8358;5,100</td>
                                <td>
                                    <Picker/>
                                </td>
                                <td className="total">&#8358;5,100</td>
                                <td><span><BsTrash/></span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={prod3} alt="product"/>
                                </td>
                                <td className="w-25 name">medical gas masks.</td>
                                <td className="w-30">h20 optimizer and stress reducer. Only for pied pipers.</td>
                                <td>&#8358;2,100</td>
                                <td>
                                    <Picker/>
                                </td>
                                <td className="total">&#8358;2,100</td>
                                <td><span><BsTrash/></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subtotal">
                    <div className="subtotal-flex">
                        <h3>total: </h3>
                        <p className="amount">&#8358; 95,300</p>
                    </div>
                    <div className="text">
                        <span><FiAlertCircle/></span>
                        <p>
                            Delivery charges not included.
                        </p>
                    </div>
                    <div className="btns">
                        <button className="alt">continue shopping</button>
                        <button onClick={() => history.push('/checkout')}>proceed to checkout</button>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default CartPage
