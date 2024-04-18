import React from "react";

//Components
import Show from "../../components/Movie and Show";
import Layout from "../../components/Layout";

export default function Shows() {
  return (
    <>
      <Layout>
        <Show typeOfComponent={"shows"} apiType={"tv/top_rated"} />
      </Layout>
    </>
  );
}
