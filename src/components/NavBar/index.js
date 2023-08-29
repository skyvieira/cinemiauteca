import React from "react";

import { Link } from "react-router-dom";

export default function index() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/shows">Shows</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </nav>
    );
}
