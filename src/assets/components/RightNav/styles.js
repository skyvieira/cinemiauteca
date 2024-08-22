import styled from "styled-components";

export const List = styled.ul`
  display: none;
  list-style: none;
  z-index: 2;

  @media only screen and (width <= 900px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    min-height: 100dvh;
    width: 18.75rem;
    padding-top: 3.5rem;
    font: 400 1.25rem/2rem "B612", sans-serif;
    transition: transform 0.3s ease-in-out;

    a {
      padding-top: 0.3rem;
      color: transparent;
      font: 400 1.2rem/2rem "B612", sans-serif;
      transition: all 0.2s ease-in-out;

      &::after {
        content: "";
        display: block;
        border-bottom: 0.1rem solid #b2aeee;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: center;
      }
    }
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  background: url("https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif")
    no-repeat center/cover;
  background-clip: text;
  color: transparent;
  transition: all 0.2s ease-in-out;

  i {
    font-size: 1.1rem;
  }
`;
