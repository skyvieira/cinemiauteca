import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100dvh;
  padding-top: 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  place-items: center;
  row-gap: 2rem;

  @media only screen and (width <= 815px) {
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  }

  @media only screen and (width <= 425px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
`;

export const Card = styled.figure`
  overflow: hidden;
  border-radius: 1rem;
  filter: drop-shadow(0 0 0.5rem #000);
  cursor: pointer;

  img {
    width: 15rem;
    height: 22rem;
    object-fit: cover;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }

    @media only screen and (width <= 768px) {
      width: 11rem;
      height: 16.5rem;
    }

    @media only screen and (width <= 600px) {
      width: 9.5rem;
      height: 15rem;
    }
  }
`;
