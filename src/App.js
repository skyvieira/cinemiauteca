import React, { lazy, Suspense } from "react";

import "./styles.css";

const Layout = lazy(() => import("./components/Layout"));
const Movies = lazy(() => import("./components/Movies"));
const Shows = lazy(() => import("./components/Shows"));
const Comments = lazy(() => import("./components/Comments"));

export default function App() {
  return (
    <Layout>
      <header>
        <h3>Header!</h3>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Movies />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Shows />
        </Suspense>
        <Suspense>
          <Comments />
        </Suspense>
      </main>
    </Layout>
  );
}