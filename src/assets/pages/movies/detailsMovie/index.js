import React, { lazy, Suspense } from 'react';

const Details = lazy(() => import('../../../../components/Movie and Show/details'));

export default function index() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Details type="movies" apiType="movie"/>
        </Suspense>
    );
}
