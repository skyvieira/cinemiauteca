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

export const LeftArrow = styled.button`
  width: 5% !important;
  transition: 0.3s !important;
  cursor: pointer !important;
  z-index: 1 !important;
  opacity: 0 !important;
  position: absolute !important;
  padding-bottom: 1rem !important;
  top: ${(props) => props.top} !important;

  &:before {
    opacity: 1 !important;
    font-size: 6rem !important;
    background: url("https://i.makeagif.com/media/6-26-2022/Kcv935.gif")
      no-repeat center/cover !important;
    background-clip: text !important;
    color: transparent !important;
  }

  &:hover,
  &:hover:before {
    opacity: 1 !important;
  }

  @media only screen and (width <= 768px) {
    opacity: 1 !important;
  }
`;

export const RightArrow = styled(LeftArrow)`
  right: 1rem !important;
`;
