import React from "react";

//Components
import Movie from "../../components/Movie and Show";
import Layout from "../../components/Layout";

//Styles
import * as S from "./style";

export default function Movies() {
  document.title = "Cinemiauteca | Filmes";

  return (
    <>
      <Layout>
        <S.MoviesWrapper>
          <Movie typeOfComponent={"movies"} apiType={"movie/popular"} />
          <Movie typeOfComponent={"movies"} apiType={"movie/top_rated"} />
          <Movie typeOfComponent={"movies"} apiType={"movie/upcoming"} />
          <Movie typeOfComponent={"movies"} apiType={"movie/now_playing"} />
        </S.MoviesWrapper>
      </Layout>
    </>
  );
}
