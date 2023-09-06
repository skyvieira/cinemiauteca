import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    a {
        width: 17rem;
        height: 10rem;
        text-decoration: none;
    }
`;

export const Card = styled.section`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    background-color: #fff;
    opacity: 0.8;
    background-image: repeating-radial-gradient( circle at 0 0, transparent 0, #fff 10px ), repeating-linear-gradient( #444cf755, #444cf7 );
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        opacity: 1;
    }
`;

export const Title = styled.h2`
    font: 700 2rem 'B612', sans-serif;
    color: #222;
    text-shadow: 0 0 0.5rem #fff;
    transition: all .2s ease-in-out;

    &:hover {
        text-shadow: 0 0 0.5rem #444cf7;
    }
`;