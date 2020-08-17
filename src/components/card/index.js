import React from 'react';
import { ShoppingCartOutlined, EyeOutlined, ExpandOutlined } from '@ant-design/icons';
import {StyledCard} from './card-styles';

const Card = ({imageUrl, title, price, loading}) => {
    return (
        <StyledCard
            loading={loading}
            bodyStyle={{padding: 0}}
            actions={[
                <EyeOutlined key="eye"/>,
                <ShoppingCartOutlined key="cart"/>,
                <ExpandOutlined key="expand" />,
            ]}
        >
            <div className="image">
                <img src={imageUrl}/>
            </div>
            <h2 className="title">{title}</h2>
            <p className="price">&#8358; {price}</p>
        </StyledCard>
    )
}

export default Card;
