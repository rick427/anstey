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

        .checkout-grid{
            display: grid;
            gap: 1em;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-auto-rows: 300px;

            .checkout-card{
                border: 1px solid red;

                @media screen and (min-width: 600px){
                    &.tall{
                        grid-row: span 3 / auto;
                    }

                    &.tall-sm{
                        grid-row: span 2 / auto;
                    }
                }
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