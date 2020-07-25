import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: 1px solid ${colors.grey3};
    cursor: pointer;

    .actions{
        position: absolute;
        top: 0;
        background: ${colors.offGreenAlternative};
        width: 70%;
        height: 3rem;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
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
            width: 2rem;
            height: 2rem;
            padding: 1rem;
            border-radius: 50px;
            background: ${colors.offGreen};
            color: ${colors.grey};
            text-align: center;
            transition: all 200ms;

            :hover{
                background: ${colors.pastelGreen};
                color: ${colors.white};
            }
        }
    }

    img{
        width: 100%;
        height: 75%;
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
        margin-bottom: .5rem;
    }

    :hover .actions{
        top: 20%;
        transform: translateY(-20%);
        opacity: 1;
    }

    :hover img{
        filter: blur(1.8px);
    }

    @media screen and (max-width: 600px){
        width: 80%;
        margin: 0 auto;
    }
`;