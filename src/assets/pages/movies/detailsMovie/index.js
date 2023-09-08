import React, { lazy, Suspense } from 'react';

//Components
const Details = lazy(() => import('../../../../components/Movie and Show/details'));

export default function DetailsMovie() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Details type="movies" apiType="movie"/>
        </Suspense>
    );
}
