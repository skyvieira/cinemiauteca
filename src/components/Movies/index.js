import React, { useState, useEffect } from "react";

import Carousel from "../Carousel";

import { Link } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=c6b4b6bad364be3d0debd4a472f74bc4"
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((err) => console.log(err.message));
    }, []);

    console.log(movies);

    return (
        <section>
            <h2>Movies</h2>
            <Carousel>
                {movies.map((movie, i) => (
                    <figure key={i}>
                        <Link to={`/movies/detailsMovie/${movie.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt=""
                                width="200"
                            />
                        </Link>
                        <figcaption>{movie.title}</figcaption>
                    </figure>
                ))}
            </Carousel>
        </section>
    );
}
