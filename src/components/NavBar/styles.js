import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: ${({ scroll }) => (scroll ? '5rem' : '7rem')};
    background: ${({ scroll }) => (scroll ? 'rgba( 14, 11, 20, .9 )' : 'transparent')};
    box-shadow: ${({ scroll }) => (scroll ? '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : 'none')};
    position: fixed;
    backdrop-filter: blur( 4px );
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: all .2s ease-in-out;
`;

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }

    @media (width <= 900px) {
        justify-content: space-between;
    }
`;

export const Logo = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2rem;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    h1 {
        font: 700 2rem/2.5rem 'Macondo Swash Caps', cursive;
        color: #fff;
        background: url('https://i.makeagif.com/media/6-26-2022/Kcv935.gif') no-repeat center/cover;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    img {
        width: 4rem;
        height: 4rem;
    }
`;

export const List = styled.ul`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    gap: 3rem;
    font: 400 1.25rem/2rem 'B612', sans-serif;
    padding-right: 2rem;
    position: relative;

    a {
        padding-top: .3rem;
        color: #fff;
        font: 400 1.2rem/2rem 'B612', sans-serif;
        transition: all .2s ease-in-out;


        &::after {
            content: "";
            display: block;
            border-bottom: 0.1rem solid #b2aeee;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: center;
        }
    }

    @media (width <= 900px) {
        display: none;
    }
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    color: #fff;
    background: url('https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif') no-repeat center/cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .2s ease-in-out;

    i {
        font-size: 1.1rem;
    }
`;