import React from "react";

//Components
import Movie from "../../components/Movie and Show";
import Layout from "../../components/Layout";

export default function Movies() {
  return (
    <>
      <Layout>
        <Movie typeOfComponent={"movies"} apiType={"movie/popular"} />
        <Movie typeOfComponent={"movies"} apiType={"movie/top_rated"} />
      </Layout>
    </>
  );
}
