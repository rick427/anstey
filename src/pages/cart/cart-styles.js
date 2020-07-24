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

        .cart{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .cart-card{
                width: 60%;
                padding: 1rem;
                /* border: 1px solid red; */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                .cart-items{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px solid ${colors.grey3};
                    overflow: hidden;
                    margin: 1rem 0;

                    img{
                        width: 25rem;
                        height: 22rem;
                        object-fit: cover;
                    }

                    .info{
                        width: 30rem;
                        font-size: 1.3rem;
                        color: ${colors.grey};
                        margin-right: 1rem;

                        h3{
                            font-size: 1.4rem;
                            text-transform: uppercase;
                            font-weight: 600;
                            margin: 1rem 0;
                            color: ${colors.grey};
                        }

                        p{
                            font-weight: 400;
                            margin: 1rem 0; 

                            span{
                                margin-left: 2rem;
                                font-weight: 400;
                                color: ${colors.grey2};
                            }

                            .error{
                                color: ${colors.grey2};
                                font-weight: 600;
                            }
                        }

                        .flex{
                            width: 70%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .delete{
                                font-size: 1.7rem;
                                color: ${colors.red};
                                cursor: pointer;
                            }
                        }

                        .total{
                            padding-top: .5rem;
                            border-top: 1px solid ${colors.grey3};

                            .ml-2{
                                margin-left: 4.5rem;
                                font-weight: 600;
                                color: ${colors.grey2};
                            }
                        }
                    }
                }
            }

            .confirm{
                width: 30%;
                padding: 3rem;
                align-self: flex-start;
                margin-top: 2rem;
                background: ${colors.grey3};

                h3{
                    text-transform: uppercase;
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: ${colors.grey};
                    padding-bottom: 2rem;
                    border-bottom: 1px solid ${colors.grey};
                }

                .flex{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    text-transform: capitalize;

                    h4{
                        font-size: 1.4rem;
                        color: ${colors.grey};
                        font-weight: 400;
                        margin: 1rem 0;
                    }

                    p{
                        font-size: 1.4rem;
                        color: ${colors.grey};
                        font-weight: 400;
                        margin: 1rem 0;
                    }
                }

                button{
                    width: 100%;
                    height: 2rem;
                    border: none;
                    padding: 1rem;
                    display: block;
                    background: ${colors.pastelGreen};
                    color: ${colors.white};
                    border-top: 1px solid ${colors.grey};
                    text-transform: uppercase;
                    font-weight: 400;
                    margin-top: 2rem;
                    cursor: pointer;
                    outline-color: ${colors.primary};
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