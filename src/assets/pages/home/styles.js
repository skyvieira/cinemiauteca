import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 6.5rem;

  .slick-slider {
    height: auto;
    padding: .5rem 0;

    .slick-arrow {
      @media only screen and (width <= 500px) {
        top: 25% !important;
      }
    }
  }
`;
