import React from 'react';
import {AiOutlineStar, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

import product from '../../assets/g-4.jpg';

import {StyledSection} from './productDetails-styles';
import Navbar from '../../components/navbar';

const ProductDetails = () => {
    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="breadcrumb">
                    <p className="breadcrumb-link">home | products |<span> product detail</span></p>
                    <div className="flex">   
                        <p className="breadcrumb-text">
                            oxford enterprise bedroom
                        </p>
                    </div>
                </div>

                <div className="product">
                    <div className="product-card w-40">
                        <img src={product} alt="product"  className="product-img"/>
                    </div>

                    <div className="product-card wide details">
                        <h3 className="title">double-tread enterprise bathroom</h3>

                        <div className="reviews">
                            <span className="stars">
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                            </span>
                            <p>(0 customer reviews) <span>sold: 39</span></p>
                        </div>

                        <h3 className="price">&#8358;150,000.00 - &#8358;200,000.00</h3>
                        <p className="description">
                            Promote healthy living. Enjoy the best of the
                            double treaded enterprise bedroom. Helps maintain
                            capilary health with it's air been a very strong antioxidant.
                            Sleep with swag, sleep with flex, sleep enterprise.
                            Our enterprise level bathrooms have the power to change your lives
                            forever just ask sponge bob. Our sole founder, slayer of dragons, king of
                            the north Jon Snow. Amapiano is the new norm !!..
                        </p>

                        <div className="picker">
                            <span><AiOutlineMinus/></span>
                                <p>0</p>
                            <span><AiOutlinePlus/></span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default ProductDetails
