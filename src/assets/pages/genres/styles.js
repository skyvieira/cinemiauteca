import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  place-items: center;
  row-gap: 2rem;

  @media only screen and (width <= 768px) {
    grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
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
      width: 20rem;
      height: 30rem;
    }
  }
`;
