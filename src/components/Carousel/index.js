import React from "react";
import Carousel from "react-slick";

import * as S from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider({ children }) {
    const settings = {
        accessibility: true,
        infinite: true,
        draggable: true,
        dots: true,
        autoplay: true,
        arrows: true,
        speed: 800,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '60px',
        slidesToScroll: 1,
        controls: true,
        prevArrow: <S.LeftArrow />,
        nextArrow: <S.RightArrow />
    };

    return (
        <S.CarouselContainer>
            <Carousel {...settings}>
                {children}
            </Carousel>
        </S.CarouselContainer>
    );
}