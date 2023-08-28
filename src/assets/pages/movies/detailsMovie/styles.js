import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${props => props.background}) no-repeat center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        position: absolute;
        inset: 0;
        z-index: 0;
    }
`;

export const Content = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

export const TitleBox = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 700 5rem 'B612', sans-serif;
    color: #fff;
    padding: 1rem 0;
`;

export const MovieInfo = styled.section`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const MoviePoster = styled.section`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 20rem;
        height: 30rem;
        object-fit: cover;
        border-radius: 1.25rem;
        filter: drop-shadow(0 0 0.5rem #000);
    }
`;

export const MovieDetails = styled.section`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const MovieSinopse = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font : 400 1.25rem/2rem 'B612', sans-serif;
    color: #fff;
    text-align: justify;
`;

export const MovieReleaseDate = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font : 400 1.25rem/2rem 'B612', sans-serif;
    color: #fff;

    p {
        position: relative;

        &::before {
            //Making a calendar icon
            content: '';
            width: 1.5rem;
            height: 1.5rem;
            background: url('https://img.icons8.com/ios/50/ffffff/calendar--v1.png') no-repeat center/cover;
            position: absolute;
            right: -2rem;
            top: .2rem;
        }
    }
`;

export const GoBack = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
        text-decoration: none;
    }

    button {
        width: 10rem;
        height: 3rem;
        border: none;
        border-radius: 0.5rem;
        background: #0072D2;
        font: 400 1.25rem/2rem 'B612', sans-serif;
        color: #fff;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background: transparent;
            border: 0.125rem solid #0072D2;
        }
    }
`;