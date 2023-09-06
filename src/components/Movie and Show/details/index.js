import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import Comments from '../../Comments';
import Page from '../index';

import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${props => props.background}) no-repeat center/cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        position: absolute;
        inset: 0;
        z-index: 0;
    }
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

const TitleBox = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 700 4rem 'B612', sans-serif;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
`;

const Info = styled.section`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Poster = styled.section`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 1.25rem;
    filter: drop-shadow(0 0 0.5rem #000);
    cursor: pointer;

    img {
        width: 20rem;
        height: 30rem;
        object-fit: cover;
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const Details = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const Sinopse = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font : 400 1.25rem/2rem 'B612', sans-serif;
    color: #fff;
    text-align: justify;
`;

const DetailsInfo = styled.section`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    p {
        padding-left: 2rem;
    }
`;

const ReleaseDate = styled.section`
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
            left: 0rem;
            top: .1rem;
        }
    }
`;

const Genre = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font : 400 1.25rem/2rem 'B612', sans-serif;
    color: #fff;
    position: relative;

    p {
        position: relative;

        &::before {
            content: '';
            width: 1.5rem;
            height: 1.5rem;
            background: url('https://img.icons8.com/ios/50/ffffff/movie.png') no-repeat center/cover;
            position: absolute;
            left: 0rem;
            top: .1rem;
        }
    }
`;

const GoBack = styled.section`
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
        background: linear-gradient(90deg, #eae3da, #bfe6ef, #e1e3f5, #e6badd, #e8f6ef);
        font: 400 1.25rem/2rem 'B612', sans-serif;
        color: #000;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
            border: 0.1rem solid #fff;
            background: url('https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif') no-repeat center/cover;
            -webkit-background-clip: text, border-box;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export default function Index({ type, apiType }) {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${apiType}/${id}?api_key=c6b4b6bad364be3d0debd4a472f74bc4&language=pt-br`)
            .then(response => response.json())
            .then(data => {
                function getGenre() {
                    if (data.genres.length > 1) {
                        return data.genres.map(genre => genre.name).join(', ') || 'Genre not found';
                    } else {
                        return data.genres[0].name;
                    }
                }

                const item = {
                    id,
                    title: data.title || "Título não encontrado",
                    name: data.name || "Título não encontrado",
                    sinopse: data.overview || "Sinopse não encontrada",
                    image: `https://image.tmdb.org/t/p/original${data.poster_path}` || null,
                    backdrop: `https://image.tmdb.org/t/p/original${data.backdrop_path}` || null,
                    releaseDate: data.release_date || data.first_air_date || "Data de lançamento não encontrada",
                    genre: getGenre()
                };
                setItem(item);
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
            <>
                <Container background={item.backdrop}>
                    <Content>
                        <TitleBox>
                            <h1>{type === 'movies' ? item.title : item.name}</h1>
                        </TitleBox>
                        <Info>
                            <Poster onClick={() => window.history.back()} >
                                {item.image && <img src={item.image} alt={type === 'movies' ? item.title : item.name} />}
                            </Poster>
                            <Details>
                                <Sinopse>
                                    {item.sinopse && <p>{item.sinopse}</p>}
                                </Sinopse>
                                <DetailsInfo>
                                    <ReleaseDate>
                                        {item.releaseDate && <p>Data de lançamento: {formatReleaseDate(item.releaseDate)}</p>}
                                    </ReleaseDate>
                                    <Genre>
                                        {item.genre && <p>Gênero: {item.genre}</p>}
                                    </Genre>
                                </DetailsInfo>
                                <GoBack>
                                    <button onClick={() => window.history.back()} >Go Back</button>
                                </GoBack>
                            </Details>
                        </Info>
                    </Content>
                </Container>
                <section>
                    <h1>Recommended {type === "movies" ? "movies" : "shows"}</h1>
                    <section>
                        <section>
                            {type === "movies" ? (
                                <Page />
                            ) : type === "shows" ? (
                                <Page />
                            ) : null}
                        </section>
                    </section>
                </section>
            </>
        );
    }

    return (
        <>
            <DetailsComponent item={item} type={type} />
            <section>
                <section>
                    <section>
                        {type === "movies" ? (
                            <Page typeOfComponent="movies" apiType="movie/popular" />
                        ) : type === "shows" ? (
                            <Page typeOfComponent="shows" apiType="tv/top_rated" />
                        ) : null}
                    </section>
                </section>
            </section>
            <Comments id={id} />
        </>
    )
}