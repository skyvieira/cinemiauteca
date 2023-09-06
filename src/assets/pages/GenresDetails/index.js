import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../../components/Layout';

export default function GenreDetails() {
    const { genreId } = useParams();
    const [genreContent, setGenreContent] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c6b4b6bad364be3d0debd4a472f74bc4&with_genres=${genreId}&language=pt-br`)
            .then((response) => response.json())
            .then((data) => {
                setGenreContent(data.results);
            });
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c6b4b6bad364be3d0debd4a472f74bc4&with_genres=${genreId}&language=pt-br`)
            .then((response) => response.json())
            .then((data) => {
                setGenreContent((prev) => [...prev, ...data.results]);
            });
    }, [genreId]);

    return (
        <>
            <Layout>
                <h2>Movies and Series with Genre ID {genreId}</h2>
                <ul>
                    {genreContent.map((content) => (
                        <figure key={content.id}>
                            <Link to={`/movies/detailsmovies/${content.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${content.poster_path}`} alt={content.title} width={200} />
                            </Link>
                        </figure>
                    ))}
                </ul>
            </Layout>
        </>
    );
}