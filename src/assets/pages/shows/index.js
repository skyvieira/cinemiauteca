import React from "react";

//Components
import Show from "../../components/Movie and Show";
import Layout from "../../components/Layout";

//Styles
import * as S from "./style";

export default function Shows() {
  document.title = "Cinemiauteca | Séries";

  return (
    <>
      <Layout>
        <S.ShowsWrapper>
          <Show typeOfComponent={"shows"} apiType={"tv/top_rated"} />
          <Show typeOfComponent={"shows"} apiType={"tv/popular"} />
          <Show typeOfComponent={"shows"} apiType={"tv/airing_today"} />
          <Show typeOfComponent={"shows"} apiType={"tv/on_the_air"} />
        </S.ShowsWrapper>
      </Layout>
    </>
  );
}
