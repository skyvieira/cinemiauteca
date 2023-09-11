import React from 'react';

//React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Home from '../../pages/home';
import ErrorPage from './error';
import Movies from '../../pages/Movies';
import Shows from '../../pages/shows';
import DetailsMovie from '../../pages/movies/detailsMovie';
import DetailsShow from '../../pages/shows/detailsShow';
import Quiz from '../../pages/quiz';
import Search from '../../pages/search';
import Genres from '../../pages/genresDetails';
import GenreDetails from '../../../components/Movie and Show/genres';

export default function Index() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/shows" element={<Shows />} />
                <Route path="/movies/detailsmovies/:id" element={<DetailsMovie />} />
                <Route path="/shows/detailsshows/:id" element={<DetailsShow />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/search" element={<Search />} />
                <Route path="/genres" element={<Genres />}>
                    <Route path=":genreId" element={<GenreDetails />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}