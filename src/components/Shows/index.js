import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";

import { Link } from "react-router-dom";

export default function Shows() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/tv/top_rated?api_key=c6b4b6bad364be3d0debd4a472f74bc4"
        )
            .then((response) => response.json())
            .then((data) => {
                setShows(data.results);
            })
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <section>
            <h2>Shows</h2>
            <Carousel>
                {shows.map((show, i) => (
                    <figure key={i}>
                        <Link to={`/shows/detailsShow/${show.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                                alt=""
                                width="200"
                            />
                        </Link>
                        <figcaption>{show.name}</figcaption>
                    </figure>
                ))}
            </Carousel>
        </section>
    );
}
