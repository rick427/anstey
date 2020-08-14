import styled from 'styled-components';
import colors from '../../utils/colors';

export const StyledSection = styled.section`
  width: 95%;
  background: ${colors.white};

    .main{
        margin-left: 10rem;
        margin-bottom: 5rem;
        background: ${colors.white};

        /* start of header */
        .header{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 10rem;

            .header-box{
                padding: 1rem;

                .logo{
                    width: 40%;
                }

                .contact{
                    width: 15rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 1.7rem;
                    font-weight: 600;
                    color: ${colors.primary};

                    span{
                        font-size: 2rem;
                        margin-top: -1rem;
                    }
                }

                /* small screens @: header */
                @media screen and (max-width: 600px){
                    .logo{
                        width: 70%;
                        display: block;
                        margin: auto;
                    }
                }

                /* large sceens @: header */
                @media screen and (min-width: 600px){
                    &.flex-center{
                        display: flex;
                        align-items: center;
                    }

                    .contact{
                        margin-left: auto;
                    }
                }
            }
        }
        /* end of header */

        /* start of search */
        .search{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2%;
            border-radius: 20px;
            background: ${colors.primary};
            border: 1px solid ${colors.primary};

            input{
                width: 80%;
                padding: 1rem;
                border: none;
                border-radius: 20px;
                outline: none;
                background: ${colors.primary};
                color: ${colors.white};

                ::placeholder{
                    color: ${colors.offGreen};
                    font-family: 'Open Sans', sans-serif;
                    text-transform: capitalize;
                    font-style: italic;
                }
            }

            span{
                margin-right: 1rem;
                font-size: 2rem;
                color: ${colors.offGreen};
            }

            /* small screens @: search */
            @media screen and (max-width: 600px){
                width: 90%;
                margin: auto;
            }
        }
        /* end of search */

        /* start of tabs */
        .tabs{
            display: grid;
            gap: 2em;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: 80px;
            margin-top: 5%;

            .tab{
                padding: 1rem;
                border-top-left-radius: 40px;
                border-top-right-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                background: ${colors.primary};
                color: ${colors.white};

                p{
                    font-size: 1.7rem;
                    font-weight: 400;
                    text-transform: capitalize;
                }
            }

            @media screen and (max-width: 600px){
                width: 100%;
                gap: 0;
                margin: 2rem auto 0 1rem;

                .tab{
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;

                    :not(:first-child){
                        border-bottom: 1px solid ${colors.white};
                    }
                }
            }
        }
        /* end of tabs */

        /* start of tab-content */
        .tabs-content{
            display: grid;
            gap: 1em;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: 300px;
            background: ${colors.offGreen};

            .tabs-box{
                padding: 2rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img{
                    width: 80%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                }

                &.flex-column{
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }

                h2{
                    font-size: 2rem;
                    text-transform: capitalize;
                    color: ${colors.primary};
                }

                p{
                    font-size: 1.4rem;
                    color: ${colors.primary}
                }

                button{
                    width: 12rem;
                    padding: 1rem;
                    background: ${colors.primary};
                    border: none;
                    border-radius: 20px;
                    color: ${colors.white};
                    text-transform: uppercase;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 400;
                    cursor: pointer;
                    font-size: 1.3rem;
                    transition: all 200ms;

                    :hover{
                        background: ${colors.pastelGreen};
                    }
                }
            }

            @media screen and (max-width: 600px){
                width: 100%;
                margin: 0 auto 0 1rem;

                .tabs-box{
                    padding: 1rem;

                    &.center{
                      justify-content: center;
                    }

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    h2{
                        text-align: center;
                    }

                    &.flex-column{
                        justify-content: space-around;
                    }
                }
            }
        }
        /* end of tab-content */

        /* start of info */
        .info{
            height: 60vh;
            background-image: ${({banner}) => `linear-gradient(rgba(0,148,116,.4), rgba(115, 212, 168,.8)),url(${banner})`};
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;

            p{
                width: 60%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                color: ${colors.offGreen};
                font-size: 2.5rem;
                font-weight: 600;
                text-align: center;
                line-height: 4.5rem;
                letter-spacing: 2px;

                .caps{
                    color: ${colors.white};
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .alt{
                    text-transform: capitalize;
                    font-weight: 600;
                    color: ${colors.white};
                }
            }

            .sponsers{
                width: 40rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: transparent;
                position: absolute;
                top: 95%;
                left: 50%;
                transform: translate(-50%, -95%);

                img{
                    width: 20%;

                    :last-child{
                        width: 35%;
                    }
                }
            }

            @media screen and (max-width: 600px){
                width: 100%;
                margin-left: 1rem;
                background-image: ${({banner}) => `linear-gradient(rgba(0,148,116,.8), rgba(115, 212, 168,1)),url(${banner})`};

                p{
                    width: 80%;
                    line-height: 3rem;
                    font-size: 1.7rem;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -40%);
                }

                .sponsers{
                    width: 80%;

                    img{
                        width: 20%;
                    }
                }
            }
        }
        /* end of info */

        /* start of footer */
        .footer{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: 450px;
            margin-bottom: 5rem;

            .footer-box{
                background: ${colors.offGreen};
                color: ${colors.primary};

                &.text{
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: flex-start;

                    h2{
                        font-size: 2rem;
                        font-weight: 800;
                    }


                    h3{
                        font-size: 1.7rem;
                        letter-spacing: .5px;
                        text-transform: capitalize;
                        color: ${colors.grey2};
                    }

                    .address{
                        p{
                            font-size: 1.4rem;
                            width: 85%;
                            letter-spacing: 1px;
                            margin-top: .5rem;
                        }
                    }

                    .flex{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 25rem;

                        .day{
                            font-size: 1.4rem;
                        }

                        .time{
                            font-size: 1.4rem;
                        }
                    }
                }

                :last-child{
                    border-bottom-right-radius: 25px; 
                }

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-bottom-right-radius: 25px; 
                }
            }

            @media screen and (max-width: 600px){
                width: 100%;
                margin-left: 1rem;
            }
        }
        /* end of footer */

        
        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100%;
            margin: 0;

            .header{
                place-items: center;
            }
        }
    }
`;