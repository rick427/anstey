import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledDiv = styled.div`
    width: 12rem;
    height: 2rem;
    padding: 1rem;
    border: 1px solid ${colors.grey3};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    color: ${colors.grey2};
    margin: 2rem 0;

    button{
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        padding: .5rem;
        border: none;
        border-radius: 50px;
        outline: none;
        background: none;

        :hover{
            background: ${colors.grey3};
        }
    }

    p{
        font-weight: 600;
        cursor: pointer;
    }  
`;