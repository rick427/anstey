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

        .main-grid{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            grid-auto-rows: 90vh;

            .main-grid-card{
                position: relative;

                :first-child{
                    /* border-right: 1px solid ${colors.grey3}; */

                    @media screen and (max-width: 600px){
                        display: none;
                    }
                }

                .inner-content{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;


                    h3{
                        position: absolute;
                        font-size: 16rem;
                        font-weight: 700;
                        color: ${colors.grey3};
                        text-transform: uppercase;
                        opacity: .3;
                        top: 50%;
                        left: 40%;
                        transform: translate(-40%, -50%);
                    }

                    .logo{
                        width: 25rem;
                        height: 25rem;
                        position: absolute;
                        top: 50%;
                        left: 40%;
                        transform: translate(-40%, -50%);

                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }

                    /* @media screen and (max-width: 600px){
                        display: none;
                    } */
                }

                .form{
                    width: 40rem;
                    height: 60rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding: 1rem;
                    box-shadow: 0 0 10px rgba(0,0,0,.15);

                    .form-title{
                        text-align: center;
                        font-size: 2rem;
                        color: ${colors.grey2};
                        text-transform: capitalize;
                        margin-top:  1rem;
                    }

                    .form-message{
                        text-align: center;
                        font-size: 1.3rem;
                        color: ${colors.grey};
                        font-weight: 300;
                        margin-top: 2rem;
                    }

                    .form-group{
                        width: 85%;
                        margin: 3rem auto 2rem auto;
                        position: relative;

                        label{
                            display: block;
                            font-size: 1.3rem;
                            text-transform: capitalize;
                            color: ${colors.grey};
                            font-weight: 600;
                            margin-bottom: .5rem;
                        }

                        .input{
                            width: 95%;
                            padding: 1rem 0;
                            border: none;
                            border-bottom: 2px solid ${colors.lightGrey};
                            outline: none;

                            ::placeholder{
                                font-family: 'Open Sans', sans-serif;
                                font-size: 1.3rem;
                            }

                            :focus ~ .underline:before, :valid ~ .underline:before{
                                transform: scaleX(1);
                            }
                        }

                        .underline{
                            position: absolute;
                            bottom: 0px;
                            height: 2px;
                            width: 95%;

                            :before{
                                position: absolute;
                                content: "";
                                height: 100%;
                                width: 100%;
                                background: ${colors.pastelGreen};
                                transform: scaleX(0);
                                transition: transform  0.3s ease;
                            }
                        }
                    }

                    .sub{
                        text-align: right;
                        text-transform: capitalize;
                        font-weight: 300;
                        font-size: 1.2rem;
                        margin-right: 3rem;
                        margin-top: 1rem;
                    }

                    .submit-btn{
                        padding: 1rem;
                        width: 40%;
                        display: block;
                        margin: 3rem auto;
                        background: ${colors.pastelGreen};
                        border: none;
                        color: ${colors.white};
                        border-radius: 2px;
                        font-weight: 600;
                        cursor: pointer;
                    }

                    @media screen and (max-width: 600px){
                        width: 100%;
                        box-shadow: none;
                    }
                }

                .info{
                    width: 90%;
                    position: absolute;
                    top: 86%;
                    left: 50%;
                    transform: translate(-50%, -85%);
                    font-size: 1.2rem;
                    font-weight: 300;
                    letter-spacing: .5px;
                    text-align: center;
                    margin: 2rem 0 4rem 0;

                    span{
                        font-weight: 600;
                        color: ${colors.primary};
                        cursor: pointer;
                    }
                }
            }
        }

        .main-logo{
            padding: 1rem;
            width: 20rem;

            img{
                width: 100%;
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