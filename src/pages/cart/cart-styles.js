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

        /* start of @: .cart */
        .cart{
            overflow-x: auto;
            border: 1px solid ${colors.veryLightGrey};

            .cart-table{
                border-collapse: collapse;
                margin: 20px auto 25px auto;
                font-size: 1.3rem;
                min-width: 400px;
                border-radius: 2px 2px 0 0;
                box-shadow: 0 0 5px rgba(0,0,0,.25);
                overflow: hidden;

                thead tr{
                    background-color: ${colors.pastelGreen};
                    color: ${colors.white};
                    text-align: center;
                    text-transform: capitalize;
                }

                th, td{
                    padding: 10px 15px;
                    text-align: center;

                    img{
                        width: 12rem;
                        height: 10rem;
                        object-fit: cover;

                        @media screen and (max-width: 600px){
                            width: 10rem;
                            height: 8rem;
                        }
                    }

                    .action{
                        display: block;
                        padding: 1.5rem;
                        width: 1.6rem;
                        height: 1.6rem;
                        font-size: 1.5rem;
                        color: ${colors.grey};
                        cursor: pointer;
                        border-radius: 50px;
                        transition: all 200ms;
                        margin: 0 auto;
                        position: relative;

                        .icon{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            font-size: 1.5rem;
                        }

                        :hover{
                            background: ${colors.red2};
                            color: ${colors.white};
                        }
                    }
                }

                td{
                    color: ${colors.grey};
                    margin: 0 1rem;

                    :nth-of-type(odd){
                        border-right: 1px solid ${colors.grey3};
                    }

                    :not(:first-child){
                        border-left: 1px solid ${colors.grey3};
                    }
                }

                .w-25{
                    width: 20rem;

                    &.name{
                        text-transform: capitalize;
                        font-weight: 400;
                    }
                }

                .w-30{
                    width: 30rem;
                }

                .total{
                    font-weight: 600;
                    color: ${colors.pastelGreen};
                }

                tbody tr{
                    border-bottom: 1px solid ${colors.grey3};

                    :nth-of-type(even){
                        background-color: ${colors.offGreen};

                        td{
                            border-right: 1px solid ${colors.offGreenAlternative};
                        }
                    }

                    :last-of-type{
                        border-bottom: 2px solid ${colors.lightGreen};
                    }
                }

                .active-row{
                    color: ${colors.pastelGreen};
                }
            }

            @media screen and (max-width: 600px){
                .cart-table{
                    td{
                        font-size: 1.1rem;
                    }
                }
            }
        }
        /* end of @: .cart */

        .edit{
            width: 82%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;

            .edit-inner{
                width: 40rem;
                display: flex;
                justify-content: space-between;

                input{
                    border: none;
                    padding: 1rem 0;
                    border-bottom: 2px solid ${colors.lightGrey};
                    outline: none;
                    font-family: 'Open Sans', sans-serif;
                }

            }

            .btn{
                padding: .8rem;
                width: 12rem;
                text-transform: capitalize;
                color: ${colors.offGreenAlt};
                background: ${colors.white};
                border: 1px solid ${colors.pastelGreen};
                font-weight: 600;
                font-family: 'Open Sans', sans-serif;
                cursor: pointer;
            }

            @media screen and (max-width: 600px){
                flex-direction: column;
                align-items: center;

                .edit-inner{
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 4rem;

                    input{
                        margin-bottom: 2rem;
                    }
                }
            }
        }

        /* start of  @: .subtotal */
        .subtotal{
            /* width: 50rem; */
            height: 15rem;
            /* margin-left: auto; */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            /* border: 1px solid red; */


            .subtotal-flex{
                width: 15rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: ${colors.grey};
                padding: 1rem;

                h3{
                    font-weight: 400;
                    font-size: 1.5rem;
                    text-transform: capitalize;
                    margin: 0;
                }

                .amount{
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: ${colors.offGreenAlt};
                    margin: 0;
                    /* padding-top: 1rem; */
                }
            }

            .text{
                display: flex;
                align-items: center;

                p{
                    font-size: 1.3rem;
                    font-weight: 400;
                    color: ${colors.grey2};
                    margin: 0 0 .5rem 1rem;

                }

                span{
                    display: inline-block;
                    font-size: 1.5rem;
                    color: ${colors.grey};
                }
            }


            .btns{
                width: 40rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                button{
                    width: 18rem;
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
                    box-shadow: 0 0 7px rgba(0,0,0,.25);
                    transition: all 200ms;

                    :hover{
                        background: ${colors.pastelGreen};
                        color: ${colors.white};
                    }
                }

                @media screen and (max-width: 600px){
                    /* height: 20rem; */
                    margin: 1rem 0;
                    flex-direction: column;
                    justify-content: space-between;

                    button{
                        margin: 1.5rem 0;
                    }
                }
            }

            @media screen and (max-width: 600px){
                height: 100%;
                margin-bottom: 5rem;
            }
        }
        /* end of  @: .subtotal */

        
        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100vw;
            margin: 0;
        }
    }
    /* end of  @: main */
`;