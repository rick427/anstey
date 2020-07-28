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

        /* start of category */
        .category{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 530px;
            gap: 2em;
            margin-bottom: 5%;

            .category-card{
                position: relative;

                @media screen and (min-width: 800px){
                    &.wide{
                        grid-column: span 3 / auto;   
                    }
                }

                &.banner{
                    background: ${({bg}) => `linear-gradient(rgba(0,148, 116,.4),rgba(0,0,0,.6)), url(${bg}) center center no-repeat`};
                    background-size: cover;

                    .inner-text{
                        position: absolute;
                        top: 50%;
                        left: 5%;
                        transform: translate(-5%, -50%);
                        width: 40%;
                        padding: 1rem;
                        color: ${colors.white};
                        background: ${colors.offGreenAlt};
                        
                        .title-tag{
                            font-size: 1.3rem;
                            text-transform: capitalize;
                            font-weight: 600;
                        }

                        .name{
                            font-size: 3.5rem;
                            text-transform: capitalize;
                            margin: .5rem 0;
                        }

                        .sub{
                            font-size: 1.2rem;
                            font-weight: 600;
                            letter-spacing: .2px;
                        }
                    }
                }

                .header{
                    text-transform: uppercase;
                    color: ${colors.white};
                    font-size: 1.3rem;
                    font-weight: 600;
                    background: ${colors.pastelGreen};
                    padding: 1rem 0  1rem 2rem;
                    margin-bottom: .5rem;
                }

                .category-list{
                    display: flex;
                    flex-direction: column;
                    background: ${colors.veryLightGrey};

                    .category-item{
                        display: inline-block;
                        padding: 1.36rem;
                        font-size: 1.2rem;
                        font-weight: 600;
                        color: ${colors.grey};
                        border-bottom: 1px solid ${colors.grey4};
                        cursor: pointer;
                        transition: all 300ms;

                        span{
                            padding: 1rem;
                        }

                        :hover{
                            background: ${colors.pastelGreen};
                            color: ${colors.white};
                        }
                    }
                }
            }
        }
        /* end of category */

        /* start of title */
        .title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid ${colors.grey3};
            margin-bottom: 2%;
            position: relative;

            ::before{
                content: '';
                position: absolute;
                top: 100%;
                width: 6%;
                height: .13rem;
                background: ${colors.offGreenAlt};
            }

            h3{
                font-size: 1.8rem;
                font-weight: 600;
                text-transform: capitalize;
                color: ${colors.grey};
            }

            input{
                padding: 1rem;
                width: 25rem;
                outline: none;
                border-radius: 25px;
                border: 1px solid ${colors.lightGrey};

                :focus{
                    box-shadow: 0 0 10px rgba(0,148,116,.15);
                }

                ::placeholder{
                    font-style: italic;
                    text-transform: capitalize;
                }
            }
        }
        /* end of title */

        /* start of collage */
        .collage{
            display: grid;
            gap: .5em;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 200px;
            margin-bottom: 5%;

            .collage-card{
                background: ${colors.pastelGreen};
                cursor: pointer;
                overflow: hidden;
                position: relative;

                @media screen and (min-width: 600px){
                    &.wide{
                        grid-column: span 2 / auto;
                    }

                    &.tall{
                        grid-row: span 2 / auto;
                    }
                }

                img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: .6;
                    transition: all 1000ms;
                    backface-visibility: hidden;

                    :hover{
                        transform: scale(1.2);
                        opacity: .9;
                    }
                }

                span{
                    position: absolute;
                    top: 10%;
                    left: 0%;
                    width: 16rem;
                    padding: 1rem;
                    transform: translate(-100%, -10%);
                    display: inline-block;
                    font-size: 1.3rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    text-align: left;
                    transition: all 300ms;
                }

                :hover span{
                    top: 10%;
                    left: 10%;
                    opacity: 1;
                    background: ${colors.offGreenAlt};
                    color: ${colors.white};
                    transform: translate(-0%, -10%);
                }
            }
        }
        /* end of collage */

        /* start of menu */
        .menu{
            padding: 1rem;
            border-bottom: 1px solid ${colors.grey3};
            margin-top: 2rem;

            .flex{
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 1.3rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: ${colors.primary};
                }

                input{
                    padding: 1rem;
                    width: 25rem;
                    outline: none;
                    border-radius: 25px;
                    border: 1px solid ${colors.lightGrey};

                    :focus{
                        box-shadow: 0 0 10px rgba(0,148,116,.15);
                    }

                    ::placeholder{
                        font-style: italic;
                        text-transform: capitalize;
                    }
                }
            }

            @media screen and (max-width: 600px){
                .flex{
                    flex-direction: column;
                    height: 8rem;

                    input{
                        width: 85%;
                    }
                }

                .category-list{
                    flex-direction: column;

                    .category-item{
                        :not(:first-child){
                            margin: 1rem 0;
                        }
                    }
                }
            }
        }
        /* end of menu */

        /* start of listings */
        .listings{
            display: grid;
            gap: 2em;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-auto-rows: 330px;
        }

        .btn{
            margin-top: 5%;
            margin-bottom: 8rem;
            
            button{
                width: 12rem;
                padding: 1rem;
                margin: 0 auto;
                display: block;
                background: ${colors.pastelGreen};
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
                    background: ${colors.primary};
                }
            }
        }
        /* end of listings */

        /* small screens @: main */
        @media screen and (max-width: 600px){
            width: 100vw;
            margin: 0;
        }
    }
    /* end of  @: main */
`;