import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledSection = styled.section`
  width: 95%;
  background: ${colors.white};

    /* start of @: main */
    .main{
        margin-left: 10rem;
        margin-bottom: 5rem;
        background: ${colors.white};

        /* start of breadcrumbs */
        .breadcrumb{
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

            .breadcrumb-link{
                font-size: 1.1rem;
                font-weight: 600;
                color: ${colors.grey};
                text-transform: uppercase;

                span{
                    color: ${colors.primary};
                }

                @media screen and (max-width: 600px){
                    display: none;
                }
            }

            .flex{
                width: 10rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .breadcrumb-text{
                    text-transform: uppercase;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: ${colors.grey};
                }

                span{
                    color: ${colors.orange};
                    font-size: 1.4rem;
                    margin-top: .5rem;
                }
            }
        }
        /* end of breadcrumbs */

        
        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100vw;
            margin: 0;
        }
    }
    /* end of  @: main */
`;