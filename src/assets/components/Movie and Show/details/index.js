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
          `https://api.themoviedb.org/3/${apiType}/${id}?api_key=${API_KEY}&language=pt-br`
        );
        const data = await response.json();
        const newItem = {
          id,
          title: data.title || "Título não encontrado",
          name: data.name || "Título não encontrado",
          sinopse: data.overview || "Sinopse não encontrada",
          image: data.poster_path
            ? `https://image.tmdb.org/t/p/original${data.poster_path}`
            : `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
          backdrop: data.backdrop_path
            ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${data.poster_path}`,
          releaseDate:
            data.release_date ||
            data.first_air_date ||
            "Data de lançamento não encontrada",
          genre: getGenre(data),
        };
        setItem(newItem);
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
          `https://api.themoviedb.org/3/${apiType}/${id}/similar?api_key=${API_KEY}&language=pt-br`
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

  function topAndBack() {
    window.scrollTo(0, 0);
    window.history.back();
  }

  const DetailsComponent = ({ item }) => (
    <>
      <S.Container background={item.backdrop}>
        <S.Content>
          <S.TitleBox>
            <h1>{type === "movies" ? item.title : item.name}</h1>
          </S.TitleBox>
          <S.Info>
            <S.Poster onClick={() => topAndBack()}>
              {item.image && (
                <img
                  src={item.image}
                  alt={type === "movies" ? item.title : item.name}
                />
              )}
            </S.Poster>
            <S.Details>
              <S.Sinopse>{item.sinopse && <p>{item.sinopse}</p>}</S.Sinopse>
              <S.DetailsInfo>
                <S.ReleaseDate>
                  {item.releaseDate && (
                    <p>
                      Data de lançamento: {formatReleaseDate(item.releaseDate)}
                    </p>
                  )}
                </S.ReleaseDate>
                <S.Genre>{item.genre && <p>Gênero: {item.genre}</p>}</S.Genre>
              </S.DetailsInfo>
              <S.GoBack>
                <button onClick={() => topAndBack()}>Voltar</button>
              </S.GoBack>
            </S.Details>
          </S.Info>
        </S.Content>
      </S.Container>
      <section>
        <S.SimilarTitle>
          {type === "movies" ? "Filmes" : "Séries"} similares
        </S.SimilarTitle>
        <section>
          <Carousel top="25%">
            {similars.map((similar) => (
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
                  <figcaption>{similar.title || similar.name}</figcaption>
                </figure>
              </Link>
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
