import React, { lazy, Suspense } from "react";

//Components
const Layout = lazy(() => import("../../components/Layout"));
const Movies = lazy(() => import("../../components/Movies"));
const Shows = lazy(() => import("../../components/Shows"));

export default function index({ typeOfComponent }) {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    {
                        typeOfComponent === "movie" ? <Movies /> : <Shows />
                    }
                </Layout>
            </Suspense>
        </>
    )
}
