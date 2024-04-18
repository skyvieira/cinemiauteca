import React, { useState, useEffect } from "react";

//React Router
import { useParams, Link } from "react-router-dom";

//Components
import Layout from "../../components/Layout";

//Styles
import * as S from "./styles";

export default function GenreDetails() {
  const { genreId } = useParams();
  const [genreMovie, setGenreMovie] = useState([]);
  const [genreShow, setGenreShow] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c6b4b6bad364be3d0debd4a472f74bc4&with_genres=${genreId}&language=pt-br`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenreMovie(data.results);
      });
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=c6b4b6bad364be3d0debd4a472f74bc4&with_genres=${genreId}&language=pt-br`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenreShow(data.results);
      });
  }, [genreId]);

  return (
    <>
      <Layout>
        <S.Container>
          {genreMovie.map((content) => (
            <S.Card key={content.id}>
              <Link to={`/movies/detailsmovies/${content.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                  alt={content.title}
                />
              </Link>
            </S.Card>
          ))}
          {genreShow.map((content) => (
            <S.Card key={content.id}>
              <Link to={`/shows/detailsshows/${content.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                  alt={content.name}
                />
              </Link>
            </S.Card>
          ))}
        </S.Container>
      </Layout>
    </>
  );
}