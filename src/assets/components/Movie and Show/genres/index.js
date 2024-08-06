import React, { useState, useEffect } from "react";

//Components
import Link from "../../Link";

//Styles
import * as S from "./styles";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/list?api_key=c6b4b6bad364be3d0debd4a472f74bc4`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <S.Container>
        {genres.map((genre, i) => (
          <Link key={i} to={`/genres/${genre.id}`}>
            <S.Card>
              <S.Title>{genre.name}</S.Title>
            </S.Card>
          </Link>
        ))}
      </S.Container>
    </>
  );
}
