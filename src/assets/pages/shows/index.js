import React from "react";

//Components
import Show from "../../components/Movie and Show";
import Layout from "../../components/Layout";
import Type from "../../components/type";

//Styles
import * as S from "./style";

export default function Shows() {
  document.title = "Cinemiauteca | Shows";

  return (
    <>
      <Layout>
        <S.ShowsWrapper>
          <Type text="Top rated shows" />
          <Show typeOfComponent={"shows"} apiType={"tv/top_rated"} />
          <Type text="Popular shows" />
          <Show typeOfComponent={"shows"} apiType={"tv/popular"} />
          <Type text="Airing today shows" />
          <Show typeOfComponent={"shows"} apiType={"tv/airing_today"} />
          <Type text="On the air shows" />
          <Show typeOfComponent={"shows"} apiType={"tv/on_the_air"} />
        </S.ShowsWrapper>
      </Layout>
    </>
  );
}
