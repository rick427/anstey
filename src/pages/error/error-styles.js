import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledSection = styled.section`
  width: 95%;
  background: ${colors.white};

    /* start of @: main */
    .main{
        margin-left: 10rem;
        margin-bottom: 5rem;
        overflow: hidden;

        .error{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 90vh;

            .heading{
                font-size: 15rem;
                font-weight: bold;
                letter-spacing: 2px;
                color: ${colors.red2};
            }

            .emp{
                font-weight: 700;
            }

            p{
                font-size: 1.8rem;
                font-weight: 500;
                color: #777;
            }

            span{
                color: ${colors.red};
                font-weight: 600;
                border-bottom: 1px solid ${colors.red};
                cursor: pointer;
                text-transform: capitalize;
            }
        }
        
        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100vw;
            margin: 0;
        }
    }
    /* end of  @: main */
`;