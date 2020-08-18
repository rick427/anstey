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

        /* start of category */
        .category{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 530px;
            gap: 2em;
            margin-bottom: 5%;

            .category-card{
                border-bottom: 1px solid #f5f5f5;

                .cover{
                    height: 520px;
                    position: relative;
                    background-color: rgba(0,0,0,.5);

                    .cover-info{
                        padding: .5rem;
                        margin: 0;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: black;
                        background: ${colors.offGreen};
                        width: 50%;
                        font-size: 1.8rem;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #444;
                        border-radius: 2px;

                        p{
                            margin-top: 2rem;
                        }
                    }
                    
                    .coverimage{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        position: absolute;
                    }
                }

                @media screen and (min-width: 800px){
                    &.wide{
                        grid-column: span 3 / auto;   
                    }
                }
/* 
                &.banner{
                    background: ${({bg}) => `linear-gradient(rgba(0,148, 116,.4),rgba(0,0,0,.6)), url(${bg}) center center no-repeat`};
                    background-size: cover;

                    .inner-text{
                        position: absolute;
                        top: 50%;
                        left: 5%;
                        transform: translate(-5%, -50%);
                        width: 45%;
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
                            color: ${colors.white};
                        }

                        .sub{
                            font-size: 1.2rem;
                            font-weight: 600;
                            letter-spacing: .2px;
                        }
                    }
                } */

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
                    overflow-y: scroll;

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
        .section-title{
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

            @media screen and (max-width: 600px){
                justify-content: center;
                margin-bottom: 2rem;

                h3{
                    font-size: 1.9rem;
                }
                input{
                    display: none;
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
                    width: 18rem;
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: 330px;
            margin: 4rem 0;
        }

        .btn{
            margin-top: 5%;
            margin-bottom: 8rem;
            text-align: center;
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