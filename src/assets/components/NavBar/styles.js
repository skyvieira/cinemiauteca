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