import React, { lazy, Suspense } from "react";

//Components
const Movie = lazy(() => import("../../../components/Movie and Show"));

export default function index() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Movie typeOfComponent={"movie"} />
            </Suspense>
        </>
    )
}
