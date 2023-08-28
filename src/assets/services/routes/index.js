import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Routes
import Home from '../../pages/Home';
import Error from './error';
import Movies from '../../pages/movies';
import Shows from '../../pages/shows';
import DetailsMovie from '../../pages/movies/detailsMovie';
import DetailsShow from '../../pages/shows/detailsShow';
import Quiz from '../../pages/quiz';

export default function index() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/shows" element={<Shows />} />
                    <Route path="/movies/detailsMovie/:id" element={<DetailsMovie />} />
                    <Route path="/shows/detailsShow/:id" element={<DetailsShow />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </Router>
        </>
    )
}
