import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledSection = styled.section`
  width: 97%;
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
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            grid-auto-rows: 420px;

            .product-card{
                &.flex{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: ${colors.grey3};
                }

                .product-img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &.details{
                    padding: 2rem;
                    border-right: 1px solid ${colors.grey3};
                    border-bottom: 1px solid ${colors.grey3};

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
                        margin-top: 1.5rem;
                        letter-spacing: .5px;
                    }

                    .description{
                        width: 100%;
                        font-size: 1.4rem;
                        font-style: italic;
                        color: ${colors.grey};
                        letter-spacing: .5px;
                        margin-top: 2rem;
                    }

                    .actions{
                        width: 60%;
                        display: flex;
                        justify-content: space-between;
                        align-items:  center;

                        button{
                            width: 12rem;
                            padding: 1rem;
                            display: block;
                            background: ${colors.pastelGreen};
                            border: none;
                            border-radius: 2px;
                            color: ${colors.white};
                            text-transform: uppercase;
                            font-family: 'Open Sans', sans-serif;
                            font-weight: 600;
                            cursor: pointer;
                            font-size: 1.2rem;
                            outline: none;
                            transition: all 200ms;

                            :hover{
                                background: ${colors.primary};
                            }
                        }

                        .alt{
                            background: ${colors.white};
                            color: ${colors.pastelGreen};
                            box-shadow: 0 0 5px rgba(0,0,0,.25);
                            transition: all 200ms;

                            :hover{
                                background: ${colors.pastelGreen};
                                color: ${colors.white};
                            }
                        }
                    }
                    @media screen and (max-width: 600px){
                        .price{
                            font-size: 1.6rem;
                            text-align: center;
                        }

                        .picker{
                            margin: 1.5rem auto;
                        }

                        .actions{
                            width: 100%;
                        }
                    }
                }
            }
        }
        /* end of product */

        /* start of product-description */
        .product-description{
            display: grid;
            gap: 1em;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            /* grid-auto-rows: 300px; */
            margin-top: 2rem;
            margin-bottom: 5rem;

            .product-desc-card{
                /* padding: 1rem; */

                h3{
                    text-transform: capitalize;
                    font-size: 1.7em;
                    font-weight: 600;
                    color: ${colors.grey2};
                    margin: 1rem 0;
                    border-bottom: 1px solid ${colors.grey3};
                }

                p{
                    font-size: 1.3rem;
                    font-weight: 300;
                    color: ${colors.grey};
                    letter-spacing: .5px;
                }

                .images{
                    padding: 1rem;
                    width: 70%;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;

                    img{
                        width: 12rem;
                        height: 10rem;
                        object-fit: cover;
                        outline-color: ${colors.pastelGreen};
                        outline-width: 2;
                        outline-style: solid;
                        outline-offset: 4px;
                        cursor: pointer;
                    }
                }

            }

            @media screen and (max-width: 600px){
                padding: 1rem;

                .product-desc-card{
                    h3{
                        margin-top: 2rem;
                        text-align: center;
                        padding-bottom: 1rem;
                    }

                    .images{
                        width: 100%;
                        height: 40rem;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                    }
                }

            }
        }
        /* end of product-description */

        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100vw;
            margin: 0;
        }
    }
    /* end of  @: main */
`;