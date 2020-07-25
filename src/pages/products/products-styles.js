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

        /* start of collage */
        .collage{
            display: grid;
            gap: .5em;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-rows: 200px;

            .collage-card{
                background: ${colors.pastelGreen};
                cursor: pointer;
                overflow: hidden;

                @media screen and (min-width: 600px){
                    &.wide{
                        grid-column: span 2 / auto;
                    }

                    &.tall{
                        grid-row: span 2 / auto;
                    }
                }

                img{
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
                        box-shadow: 0 0 10px rgba(0,0,0,.15);
                    }

                    ::placeholder{
                        font-style: italic;
                        text-transform: capitalize;
                    }
                }
            }

            .category-list{
                display: flex;
                justify-content: center;
                align-items: center;
                list-style: none;
                margin-top: 2rem;

                .category-item{
                    display: inline-block;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: ${colors.grey2};
                    cursor: pointer;

                    :first-child{
                        border-bottom: 2px solid ${colors.pastelGreen};
                    }

                    :not(:first-child){
                        margin: 0 2rem;
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
            margin-top: 5%;
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