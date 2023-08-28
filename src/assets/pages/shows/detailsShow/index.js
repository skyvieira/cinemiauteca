import React, { lazy, Suspense } from 'react';

const Details = lazy(() => import('../../../../components/Movie and Show/details'));

export default function DetailsShow() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Details type="shows" apiType="tv/top_rated"/>
        </Suspense>
    );
}