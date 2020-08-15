import React from 'react';
import {useHistory} from 'react-router-dom';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {FaExpand, FaCartPlus} from 'react-icons/fa';

import {StyledDiv} from './card-styles';

export default function Card({image, title, price, stars}) {
    const history = useHistory();

    const handleAddToCart = () => {
        // addToast(`Product added to cart`, {appearance: 'success', autoDismiss: true})
    }

    return (
        <StyledDiv>
            <div className="actions">
                <span onClick={() => history.push('/product/217')}>
                    <FaExpand className="icon"/>
                </span>
                <span onClick={handleAddToCart}>
                    <FaCartPlus className="icon"/>
                </span>
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
