import React, { useEffect } from "react";

//React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "../../pages/home";
import ErrorPage from "./error";
import Movies from "../../pages/movies";
import Shows from "../../pages/shows";
import DetailsMovie from "../../pages/movies/detailsMovie";
import DetailsShow from "../../pages/shows/detailsShow";
import Search from "../../pages/search";
import Genres from "../../pages/genres";

//Components
import GenresCard from "../../../assets/components/Movie and Show/genres";

export default function Index() {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies/detailsmovies/:id" element={<DetailsMovie />} />
        <Route path="/shows/detailsshows/:id" element={<DetailsShow />} />
        <Route path="/search" element={<Search />} />
        <Route path="/genres" element={<Genres />}>
          <Route path=":genreId" element={<GenresCard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
