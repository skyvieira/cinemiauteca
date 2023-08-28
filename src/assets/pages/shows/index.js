import React, { lazy, Suspense } from "react";

//Components
const Show = lazy(() => import("../../../components/Movie and Show"));

export default function index() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Show typeOfComponent={"shows"} />
            </Suspense>
        </>
    )
}
