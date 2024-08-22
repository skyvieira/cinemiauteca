import React from "react";

//Components
import Movie from "../../components/Movie and Show";
import Layout from "../../components/Layout";
import Type from "../../components/type";

//Styles
import * as S from "./style";

export default function Movies() {
  document.title = "Cinemiauteca | Movies";

  return (
    <>
      <Layout>
        <S.MoviesWrapper>
          <Type text="Popular movies" />
          <Movie typeOfComponent={"movies"} apiType={"movie/popular"} />
          <Type text="Top rated movies" />
          <Movie typeOfComponent={"movies"} apiType={"movie/top_rated"} />
          <Type text="Upcoming movies" />
          <Movie typeOfComponent={"movies"} apiType={"movie/upcoming"} />
          <Type text="Popular movies" />
          <Movie typeOfComponent={"movies"} apiType={"movie/now_playing"} />
        </S.MoviesWrapper>
      </Layout>
    </>
  );
}
