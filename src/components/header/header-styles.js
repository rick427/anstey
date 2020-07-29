import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledDiv = styled.div`
    height: 5vh;
    background: ${colors.grey3};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.mt-2{
        margin-top: 5%;
    }

    &.alt{
        background: ${colors.offGreen};
    }

    .logo{
        width: 12rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .breadcrumb-link{
        font-size: 1.1rem;
        font-weight: 600;
        color: ${colors.grey};
        text-transform: uppercase;

        span{
            color: ${colors.primary};
        }
    }
`;