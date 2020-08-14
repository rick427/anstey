import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledDiv = styled.div`
    width: 18rem;
    height: 2rem;
    padding: 2rem;
    border: 1px solid ${colors.grey3};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    color: ${colors.grey2};
    margin: 2rem 0;

    button{
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        padding: 1.6rem;
        border: none;
        border-radius: 50px;
        outline: none;
        background: none;
        position: relative;

        :hover{
            background: ${colors.offGreen};
        }

        .icon{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
        }
    }

    p{
        font-weight: 600;
        cursor: pointer;
        margin-top: 1rem;
    }  
`;