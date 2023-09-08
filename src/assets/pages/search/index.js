import React, { lazy, Suspense } from "react";

//Components
const Layout = lazy(() => import("../../../components/Layout"));

export default function Search() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <header>
                        <h3>Header!</h3>
                    </header>
                    <main>
                        <h3>Search!</h3>
                    </main> 
                </Layout>
            </Suspense>
        </>
    )
}
