import React, { lazy, Suspense } from "react";

//Styles
import * as S from "./styles";

//Components
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
            <S.Type>
              Popular movies
            </S.Type>
              <MoviesAndShows
                typeOfComponent={"movies"}
                apiType={"movie/popular"}
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <S.Type>
              Top Rated Shows
            </S.Type>
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
