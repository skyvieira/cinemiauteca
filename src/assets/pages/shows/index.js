import React, { lazy, Suspense } from "react";

//Components
const Show = lazy(() => import("../../../components/Movie and Show"));
const Layout = lazy(() => import("../../../components/Layout"));

export default function Shows() {
    return (
        <>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Show typeOfComponent={"shows"} apiType={"tv/top_rated"} />
                </Suspense>
            </Layout>
        </>
    )
}
