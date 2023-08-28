import React, { lazy, Suspense } from 'react';

const DetailsMovie = lazy(() => import('../../../../components/Movie and Show/details'));

export default function index() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetailsMovie type="movies" apiType="movie"/>
        </Suspense>
    );
}
