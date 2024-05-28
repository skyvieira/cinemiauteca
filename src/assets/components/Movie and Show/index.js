import React, { useState, useEffect } from "react";

//Components
import Carousel from "../Carousel";
import Link from "../Link";

//React Router
import { useParams } from "react-router-dom";

//Styles
import * as S from "./styles";

export default function Index({ typeOfComponent, apiType }) {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${apiType}?api_key=c6b4b6bad364be3d0debd4a472f74bc4&language=pt-br`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredItems = data.results.filter(
          (item) => item.id !== parseInt(id)
        );
        setItems(filteredItems);
      })
      .catch((err) => console.log(err.message));
  }, [id, apiType]);

  document.onload = window.scrollTo(0, 0);

  return (
    <S.CarrouselWrapper>
      <Carousel top="40%">
        {items.map((item, i) => (
          <S.Poster key={i}>
            <Link
              to={`/${typeOfComponent}/details${typeOfComponent}/${item.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={item.title || item.name}
                className="carousel_image"
              />
              <figcaption>{item.title || item.name}</figcaption>
            </Link>
          </S.Poster>
        ))}
      </Carousel>
    </S.CarrouselWrapper>
  );
}
