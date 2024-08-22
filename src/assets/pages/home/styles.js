import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  min-height: 100dvh;
  padding-top: 7rem;

  .slick-slider {
    height: auto;
    padding: 0.5rem 0;

    .slick-arrow {
      @media only screen and (width <= 500px) {
        top: 25% !important;
      }
    }
  }
`;
