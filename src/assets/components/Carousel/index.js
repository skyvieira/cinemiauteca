import React from "react";

//Swiper
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as S from "./styles";

export default function Slider({ children }) {
  return (
    <>
      <S.CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          navigation
          breakpoints={{
            550: {
              slidesPerView: 2,
            },
            641: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {children}
        </Swiper>
      </S.CarouselContainer>
    </>
  );
}
