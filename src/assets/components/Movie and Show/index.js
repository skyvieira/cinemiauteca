import React, { useState, useEffect } from "react";

//Components
import Carousel from "../Carousel";
import Link from "../Link";

//React Router
import { useParams } from "react-router-dom";

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

  return (
    <Carousel top="40%">
      {items.map((item, i) => (
        <figure key={i}>
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
        </figure>
      ))}
    </Carousel>
  );
}
