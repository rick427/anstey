import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
    cursor: pointer;

    .actions{
        position: absolute;
        top: 0;
        width: 80%;
        height: 5rem;
        padding: 2.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 50px;
        z-index: 100;
        transform: translateY(-120%);
        transition: all 500ms;
        opacity: 0;

        span{
            display: block;
            font-size: 1.6rem;
            cursor: pointer;
            width: 4.5rem;
            height: 4.5rem;
            padding: 2rem;
            border-radius: 50px;
            background: ${colors.pastelGreen};
            color: ${colors.white};
            text-align: center;
            transition: all 200ms;
            position: relative;

            :hover{
                background: ${colors.offGreen};
                color: ${colors.grey2};
            }

            .icon{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.7rem;
            }
        }
    }

    img{
        width: 100%;
        height: 70%;
        object-fit: cover;
        transition: all 200ms;
    }

    .title{
        text-align: center;
        text-transform: capitalize;
        font-size: 1.3rem;
        font-weight: 400;
        font-style: italic;
        color: ${colors.grey};
        margin-top: 1rem;
    }

    .star{
        color: ${colors.orange};

        &.blank{
            color: ${colors.orange};
        }
    }

    .price{
        font-size: 1.3rem;
        font-weight: 700;
        color: ${colors.grey};
        margin-bottom: 1rem;
    }

    :hover .actions{
        top: 20%;
        transform: translateY(-20%);
        opacity: 1;
    }

    :hover img{
        filter: blur(4px);
    }

    @media screen and (max-width: 600px){
        width: 80%;
        margin: 0 auto;
    }
`;