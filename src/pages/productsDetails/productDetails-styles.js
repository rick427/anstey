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
                font-size: 1.2rem;
                font-weight: 400;
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
                width: 20rem;
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

        /* start or product */
        .product{
            display: grid;
            gap: 1em;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-auto-rows: 500px;

            .product-card{
                border: 1px solid grey;

                @media screen and (min-width: 600px){
                    &.wide{
                        grid-column: span 2 / auto;
                    }

                    &.w-40{
                        width: 45rem;
                    }
                }

                &.flex{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .product-img{
                    width: 100%;
                    height: 100%;
                }

                &.details{
                    padding: 2rem;

                    .title{
                        text-transform: capitalize;
                        font-size: 1.7rem;
                        font-weight: 400;
                        color: ${colors.grey};
                    }

                    .reviews{
                        display: flex;
                        align-items: center;
                        margin-top: 1rem;

                        .stars{
                            display: block;
                            margin-top: .5rem;
                            font-size: 1.6rem;
                            color: ${colors.orange};
                        }

                        p{
                            font-size: 1.3rem;
                            margin-left: 2rem;
                            color: ${colors.grey};

                            span{
                                margin-left: 1rem;
                                text-transform: capitalize;
                                display: inline-block;
                                font-weight: 600;
                            }
                        }
                    }

                    .price{
                        font-size: 2rem;
                        font-weight: 600;
                        color: ${colors.grey2};
                        margin-top: 1rem;
                        letter-spacing: .5px;
                    }

                    .description{
                        width: 75%;
                        font-size: 1.4rem;
                        font-style: italic;
                        color: ${colors.grey};
                        letter-spacing: .5px;
                        margin-top: 2rem;
                    }
                }
            }
        }
        /* end of product */

        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100vw;
            margin: 0;
        }
    }
    /* end of  @: main */
`;