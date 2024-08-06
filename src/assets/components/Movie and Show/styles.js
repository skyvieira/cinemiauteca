import styled from "styled-components";

export const CarrouselWrapper = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
`;

export const Poster = styled.figure`
  width: 100%;

  @media only screen and (width <= 640px) {
    width: 80% !important;
  }
  
  @media only screen and (width <= 550px) {
    width: 60% !important;
  }

  @media only screen and (width <= 425px) {
    width: 90% !important;
  }
`;