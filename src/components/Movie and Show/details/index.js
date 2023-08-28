import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import Commets from '../../Comments';

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

export const Info = styled.section`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Poster = styled.section`
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

export const Details = styled.section`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const Sinopse = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font : 400 1.25rem/2rem 'B612', sans-serif;
    color: #fff;
    text-align: justify;
`;

export const ReleaseDate = styled.section`
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

export default function Index({ type, apiType }) {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [show, setShow] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${apiType}/${id}?api_key=c6b4b6bad364be3d0debd4a472f74bc4`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title || "Title not found",
                    sinopse: data.overview || "Sinopse not found",
                    image: `https://image.tmdb.org/t/p/w500${data.poster_path}` || null,
                    backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` || null,
                    releaseDate: data.release_date || "Release date not found"
                };
                setMovie(movie);

                const show = {
                    id,
                    name: data.name || "Name not found",
                    sinopse: data.overview || "Sinopse not found",
                    image: `https://image.tmdb.org/t/p/w500${data.poster_path}` || null,
                    backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` || null,
                    releaseDate: data.first_air_date || "Release date not found"
                };
                setShow(show);
            })
            .catch(error => console.log(error));
    }, [id, apiType]);

    const formatReleaseDate = (rawDate) => {
        const date = new Date(rawDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    function DetailsComponent({ item, type }) {
        return (
            <Container background={item.backdrop}>
                <Content>
                    <TitleBox>
                        <h1>{type === 'movies' ? item.title : item.name}</h1>
                    </TitleBox>
                    <Info>
                        <Poster>
                            <Link to={`/${type}`}>
                                {item.image && <img src={item.image} alt={type === 'movies' ? item.title : item.name} />}
                            </Link>
                        </Poster>
                        <Details>
                            <Sinopse>
                                {item.sinopse && <p>{item.sinopse}</p>}
                            </Sinopse>
                            <ReleaseDate>
                                {item.releaseDate && <p>Release date: {formatReleaseDate(item.releaseDate)}</p>}
                            </ReleaseDate>
                            <GoBack>
                                <Link to={`/${type}`}>
                                    <button>Go Back</button>
                                </Link>
                            </GoBack>
                        </Details>
                    </Info>
                </Content>
            </Container>

        );
    }

    return (
        <>
            {type === "movies" ? (
                <DetailsComponent item={movie} type="movies" />
            ) : type === "shows" ? (
                <DetailsComponent item={show} type="shows" />
            ) : null}
            <Commets id={id} />
        </>
    )
}