import React, { useEffect, useState } from "react";

//React Router
import { useParams } from "react-router-dom";

//Components
import Comments from "../../Comments";
import Carousel from "../../Carousel";
import Link from "../../Link";

//Styles
import * as S from "./styles";

const API_KEY = "c6b4b6bad364be3d0debd4a472f74bc4";

const Index = ({ type, apiType }) => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${apiType}/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        const newItem = {
          id,
          title: data.title || "Title not found",
          name: data.name || "Title not found",
          sinopse: data.overview || "Overview not found",
          image: data.poster_path
            ? `https://image.tmdb.org/t/p/original${data.poster_path}`
            : `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
          backdrop: data.backdrop_path
            ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${data.poster_path}`,
          releaseDate:
            data.release_date ||
            data.first_air_date ||
            "Release date not found",
          genre: getGenre(data),
        };
        setItem(newItem);
        console.log(newItem);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, apiType]);

  useEffect(() => {
    const fetchSimilarData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${apiType}/${id}/similar?api_key=${API_KEY}`
        );
        const data = await response.json();
        const similarItems = data.results.filter((item) => item.backdrop_path);
        setSimilars(similarItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSimilarData();
  }, [id, apiType]);

  const getGenre = (data) => {
    if (data.genres && data.genres.length > 0) {
      return data.genres.map((genre) => genre.name).join(", ");
    } else {
      return "Genre not found";
    }
  };

  const formatReleaseDate = (rawDate) => {
    const date = new Date(rawDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  function top() {
    window.history.back();
  }

  document.title = `${type === "movies" ? item.title : item.name} | ${
    type === "movies" ? "Movie" : "Show"
  }`;

  document.onload = window.scrollTo(0, 0);

  const DetailsComponent = ({ item }) => (
    <>
      <S.Container background={item.image}>
        <S.Content>
          <S.TitleBox>
            <h1>{type === "movies" ? item.title : item.name}</h1>
          </S.TitleBox>
          <S.Info>
            <S.PosterWrapper onClick={() => top()}>
              {item.image && (
                <S.Poster>
                  <img
                    src={item.image}
                    alt={type === "movies" ? item.title : item.name}
                  />
                </S.Poster>
              )}
            </S.PosterWrapper>
            <S.Details>
              <S.Sinopse>{item.sinopse && <p>{item.sinopse}</p>}</S.Sinopse>
              <S.DetailsInfo>
                <S.ReleaseDate>
                  {item.releaseDate && (
                    <p>Release Date: {formatReleaseDate(item.releaseDate)}</p>
                  )}
                </S.ReleaseDate>
                <S.Genre>{item.genre && <p>Genre: {item.genre}</p>}</S.Genre>
              </S.DetailsInfo>
              <S.GoBack>
                <button onClick={() => top()}>Go Back</button>
              </S.GoBack>
            </S.Details>
          </S.Info>
        </S.Content>
      </S.Container>
      <section>
        <section>
          <Carousel top="50%">
            <S.SimilarTitle>
              {type === "movies" ? "Similar Movies" : "Similar Shows"}
            </S.SimilarTitle>
            {similars.map((similar) => (
              <section>
                <Link
                  to={`/${type}/details${type}/${similar.id}`}
                  key={similar.id}
                >
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/original${similar.backdrop_path}`}
                      alt={similar.title || similar.name}
                      className="carousel_image"
                    />
                  </figure>
                </Link>
              </section>
            ))}
          </Carousel>
        </section>
      </section>
    </>
  );

  return (
    <>
      <DetailsComponent item={item} />
      <Comments id={id} />
    </>
  );
};

export default Index;
