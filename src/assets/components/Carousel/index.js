// import React from "react";

// import Carousel from "react-slick";

// import * as S from "./styles";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Slider({ children, top }) {
//   const settings = {
//     accessibility: true,
//     infinite: true,
//     draggable: true,
//     dots: true,
//     autoplay: false,
//     arrows: true,
//     speed: 800,
//     slidesToShow: 1,
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToScroll: 1,
//     controls: true,
//     prevArrow: <S.LeftArrow top={top} />,
//     nextArrow: <S.RightArrow top={top} />,

//     responsive: [
//       {
//         breakpoint: 1250,
//         settings: {
//           centerPadding: "50px",
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           centerPadding: "40px",
//         },
//       },
//       {
//         breakpoint: 850,
//         settings: {
//           centerPadding: "25px",
//         },
//       },
//       {
//         breakpoint: 550,
//         settings: {
//           centerPadding: "1px",
//         },
//       },
//     ],
//   };

//   document.onkeydown = (e) => {
//     if (e.key === "ArrowLeft") {
//       document.querySelector(".slick-prev").click();
//     } else if (e.key === "ArrowRight") {
//       document.querySelector(".slick-next").click();
//     }
//   };

//   return (
//     <S.CarouselContainer>
//       <Carousel {...settings}>{children}</Carousel>
//     </S.CarouselContainer>
//   );
// }

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
