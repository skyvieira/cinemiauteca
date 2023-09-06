import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Cat from "../../assets/gif/cat.gif";

import * as S from "./styles";

import Menu from "../Menu";

export default function NavBar() {

    const [scroll, setScroll] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.scrollY;

        setScrollPosition(currentPosition);

        if (currentPosition > 0) {
            if (scrollPosition > currentPosition) {
                setScroll('up');
            } else {
                setScroll('down');
            }
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    return (
        <>
            <S.Container scroll={scroll}>
                <S.Nav>
                    <S.Logo>
                        <Link to="/">
                            <h1>Cinemiauteca</h1>
                            <img
                                src={Cat}
                                alt="netflix-font"
                                border="0"
                            />
                        </Link>
                    </S.Logo>
                    <Menu />
                    <S.List>
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
                </S.Nav>
            </S.Container>
        </>
    );
}
