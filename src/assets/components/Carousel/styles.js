import styled from "styled-components";

export const CarouselContainer = styled.section`
  width: 100%;
  height: 100%;

  .slick-slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    position: relative;

    a {
      width: 100%;
      height: 100%;
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
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.8) 20%,
          rgba(0, 0, 0, 0) 100%
        );
        z-index: 1;
        transition: all 0.3s ease-in-out;
      }
    }

    a:hover .carousel_image {
      transform: scale(1.1);
    }

    .slick-dots {
      bottom: 1rem;
      right: 5rem;
      text-align: right;

      li {
        button:before {
          color: #f9f9f9;
        }
      }

      @media only screen and (width <= 768px) {
        display: none !important;
      }
    }

    @media only screen and (width <= 768px) {
      align-items: center;
    }
  }

  .carousel_image {
    width: 90vw;
    height: 58vh;
    object-fit: cover;
    object-position: top;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;

    @media only screen and (width <= 768px) {
      height: 50vh;
    }

    @media only screen and (width <= 500px) {
      width: 97vw;
      height: 40vh;
    }
  }

  figcaption {
    width: 90%;
    position: absolute;
    top: 15rem;
    margin-left: 2rem;
    z-index: 2;
    font: 700 3rem "B612", serif;
    text-wrap: balance;
    background: url("https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif")
      no-repeat center/cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (width <= 768px) {
      top: 10rem;
      font-size: 2rem;
    }

    @media only screen and (width <= 500px) {
      width: 80%;
      top: 10rem;
      margin-left: 3rem;
      font-size: 1.35rem;
    }
  }

  .slick-prev {
    left: 1rem !important;

    &:before {
      content: "‹";
    }
  }

  .slick-next {
    &:before {
      content: "›";
    }
  }

  .slick-initialized .slick-slide {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .slick-track {
    display: flex;
    align-items: center;
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
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
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
