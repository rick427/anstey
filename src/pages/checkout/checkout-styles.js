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
                /* :first-child{
                    border: 1px solid ${colors.grey3};
                } */

                @media screen and (min-width: 600px){
                    &.tall{
                        grid-row: span 3 / auto;
                    }

                    &.tall-sm{
                        grid-row: span 2 / auto;
                    }
                }

                /* start of inner left card */
                .inner-card{
                    padding: 1rem;

                    .title{
                        text-align: center;
                        font-size: 1.5rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        color: ${colors.pastelGreen};
                        margin: 3rem 0;
                        padding: 0 0 1rem 0;
                        border-bottom: 1px solid ${colors.grey3};
                    }

                    .form-flex{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .form-group{
                        width: 30rem;
                        margin: 1rem 0;
                        position: relative;

                        &.full{
                            width: 99.9%;

                            input{
                                width: 95.5%;
                            }
                        }

                        label{
                            display: block;
                            font-size: 1.2rem;
                            font-weight: 600;
                            color: ${colors.grey};
                            text-transform: capitalize;
                            margin-bottom: 1rem;
                        }

                        input{
                            padding: .8rem;
                            width: 90%;
                            font-family: 'Open Sans', sans-serif;
                            outline: none;
                            border: 1px solid ${colors.lightGrey};

                            :valid{
                                border: 1px solid ${colors.pastelGreen};
                            }
                            
                            ::placeholder{
                                text-transform: capitalize;
                            }
                        }

                        .mt{
                            margin-top: 2rem;
                        }

                    }
                    button{
                        padding: 1.2rem;
                        width: 22rem;
                        display: block;
                        margin: 5rem auto;
                        background: ${colors.pastelGreen};
                        border: none;
                        color: ${colors.white};
                        border-radius: 2px;
                        font-weight: 600;
                        cursor: pointer;
                        text-transform: capitalize;
                    }
                }
                /* end of inner left card */

                .summary{
                    width: 80%;
                    margin: 2rem auto 2rem auto;
                    box-shadow: 0 0 5px rgba(0,0,0,.15);

                    .summary-header{
                        padding: 1.5rem;
                        font-size: 1.4rem;
                        text-transform: capitalize;
                        font-weight: 600;
                        color: ${colors.white};
                        text-align: center;
                        background: ${colors.pastelGreen};
                    }

                    .order{
                        padding: 1rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid ${colors.grey3};

                        .order-img{
                            width: 12rem;
                            height: 10rem;

                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            }
                        }

                        .order-info{
                            width: 20rem;
                            height: 10rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: flex-start;

                            h3{
                                font-size: 1.3rem;
                                font-weight: 700;
                                text-transform: capitalize;
                                color: ${colors.grey};
                                /* margin: 0 0 1rem 0; */
                            }

                            p{
                                font-size: 1.2rem;
                                font-weight: 400;
                                color: ${colors.grey2};
                            }
                        }

                        .order-price{
                            width: 10rem;
                            height: 10rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: flex-start;

                            p{
                                font-size: 1.3rem;
                                font-weight: 700;
                                color: ${colors.pastelGreen};
                            }
                        }
                    }

                    .order-summary{
                        padding: 1rem;
                        /* width: 40rem; */
                        margin: 0 auto;
                        background: ${colors.veryLightGrey};

                        .inner-flex{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: 1rem 0;

                            p{
                                font-size: 1.2rem;
                                color: ${colors.grey};
                                text-transform: capitalize;
                                font-weight: 600;
                            }
                        }
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