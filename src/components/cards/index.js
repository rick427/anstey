import React from 'react';
import {useHistory} from 'react-router-dom';
import {AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineExpand} from 'react-icons/ai';

import {StyledDiv} from './card-styles'

export default function Card({image, title, price, stars}) {
    const history = useHistory();

    return (
        <StyledDiv>
            <div className="actions">
                <span onClick={() => history.push('/product/217')}><AiOutlineExpand/></span>
                <span><AiOutlineShoppingCart/></span>
            </div>

            <img src={image} alt="products"/>

            <p className="title">{title}</p>
            {stars ? (
                <span className="star">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </span>
            ) : (
                <span className="star blank">
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </span>
            )}

            <p className="price">₦{price}</p>
        </StyledDiv>
    )
}
