import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
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

export const Type = styled.h2`
  font: 700 1.3rem "B612", sans-serif;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
