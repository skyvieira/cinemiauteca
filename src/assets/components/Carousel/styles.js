import styled from "styled-components";

export const CarouselContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;

  .swiper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    position: relative;

    a {
      width: 100%;
      height: 100%;
      cursor: grab;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;
      border-radius: 1rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
        transition: all 0.3s ease-in-out;
      }
    }

    a:hover .carousel_image {
      transform: scale(1.1);
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #fff !important;
    }
    
    .swiper-pagination-bullet{
      background-color: #fff !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #7174bb !important;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel_image {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: bottom;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
  }
`;