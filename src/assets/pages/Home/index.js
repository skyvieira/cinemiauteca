import React, { lazy, Suspense } from "react";

const Layout = lazy(() => import("../../../components/Layout"));
const Movies = lazy(() => import("../../../components/Movies"));
const Shows = lazy(() => import("../../../components/Shows"));

export default function index() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <header>
                    <h3>Header!</h3>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Movies />
                    </Suspense>
                </header>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Shows />
                    </Suspense>
                </main>
            </Layout>
        </Suspense>
    );
}