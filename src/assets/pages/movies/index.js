import React, { lazy, Suspense } from "react";

//Components
const Movie = lazy(() => import("../../../components/Movie and Show"));
const Layout = lazy(() => import("../../../components/Layout"));

export default function Movies() {
    return (
        <>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Movie typeOfComponent={"movies"} apiType={"movie/popular"} />
                </Suspense>
            </Layout>
        </>
    )
}
