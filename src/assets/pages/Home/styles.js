import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 80vh;

    .slick-slider {
        height: 80vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        position: relative;

        a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            border-radius: 1rem;
            overflow: hidden;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(90deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 100%);
                z-index: 1;
                transition: all .3s ease-in-out;
            }
        }

        a:hover .carousel_image {
            transform: scale(1.1);
        }

        .slick-dots {
            bottom: 1rem;
            right: 5rem;
            text-align: right;

            li {
                button:before {
                    color: #fff;
                }
            }
        }
    }

    .carousel_image {
        width: 86rem;
        height: 30rem;
        object-fit: cover;
        object-position: top;
        box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
        transition: all .3s ease-in-out;
    }

    figcaption {
        position: absolute;
        top: 15rem;
        padding-left: 2rem;
        z-index: 2;
        font-size: 3rem;
        background: url('https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif') no-repeat center/cover;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;