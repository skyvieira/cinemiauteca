import React, { lazy, Suspense } from "react";

//Styles
import * as S from "./styles";

//Components
import Type from "../../components/type";
const Layout = lazy(() => import("../../components/Layout"));
const MoviesAndShows = lazy(() => import("../../components/Movie and Show"));
const Genres = lazy(() => import("../../components/Movie and Show/genres"));

export default function Home() {
  document.title = "Cinemiauteca | Home";

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <S.HomeWrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <Type text="Popular movies" />
              <MoviesAndShows
                typeOfComponent={"movies"}
                apiType={"movie/popular"}
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Type text="Top rated shows" />
              <MoviesAndShows
                typeOfComponent={"shows"}
                apiType={"tv/top_rated"}
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Genres />
            </Suspense>
          </S.HomeWrapper>
        </Layout>
      </Suspense>
    </>
  );
}
