import React, { useState, useEffect } from "react";

//Styles
import * as S from "./styles";

//Components
import Menu from "../Menu";
import List from "./Items";
import Logo from "../Logo";

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
                    <Logo />
                    <Menu />
                    < List />
                </S.Nav>
            </S.Container>
        </>
    );
}
