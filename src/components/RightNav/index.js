import React from 'react';

import * as S from './styles';

import { Link } from 'react-router-dom';


const RightNav = ({ open }) => {
    return (
        <S.List open={open}>
            <S.Item>
                <i class="fa-solid fa-house"></i>
                <Link to="/">
                    <p>Home</p>
                </Link>
            </S.Item>
            <S.Item>
                <i class="fa-solid fa-clapperboard"></i>
                <Link to="/movies">Movies</Link>
            </S.Item>
            <S.Item>
                <i class="fa-solid fa-tv"></i>
                <Link to="/shows">Shows</Link>
            </S.Item>
            <S.Item>
                <i class="fa-solid fa-question"></i>
                <Link to="/quiz">Quiz</Link>
            </S.Item>
            <S.Item>
                <i class="fa-solid fa-search"></i>
                <Link to="/search">Search</Link>
            </S.Item>
        </S.List>
    )
}

export default RightNav;