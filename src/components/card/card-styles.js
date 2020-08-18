import styled from 'styled-components';
import {Card} from 'antd';

export const StyledCard = styled(Card)`
box-shadow: 0 0 4px rgba(0,0,0,.12);
display: flex !important;
flex-direction: column !important;
justify-content: space-between !important;

.image{
    width: 100%;
    height: 18rem;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        backface-visibility: hidden;
        transition: all 800ms ease;
    }
}

.title{
    font-size: 1.4rem;
    font-weight: 300;
    color: #555;
    text-align: center;
    margin: 1rem auto;
    width: 80%;
    /* border: 1px solid red; */
}

.price{
    font-weight: 600;
    color: #555;
    margin-top: 1rem;
    text-align: center;
    /* border: 1px solid blue; */
}

:hover{
    .image{
        img{
            transform: scale(1.1);
        }
    }
}

@media screen and (max-width: 600px){
    width: 80%;
    margin: 0 auto;
}
`;