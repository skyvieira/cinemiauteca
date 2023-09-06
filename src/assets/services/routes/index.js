import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

//Routes
import Home from '../../pages/home';
import Error from './error';
import Movies from '../../pages/movies';
import Shows from '../../pages/shows';
import DetailsMovie from '../../pages/movies/detailsMovie';
import DetailsShow from '../../pages/shows/detailsShow';
import Quiz from '../../pages/quiz';
import Search from '../../pages/search';
import Genres from '../../pages/GenresDetails';
import GenreDetails from '../../../components/Movie and Show/genres';

export default function index() {
    return (
        <>
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
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    )
}