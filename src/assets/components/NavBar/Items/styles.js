import styled from "styled-components";

export const List = styled.ul`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 3rem;
  font: 400 1.25rem/2rem "B612", sans-serif;
  padding-right: 2rem;
  position: relative;

  a {
    padding-top: 0.3rem;
    color: #f9f9f9;
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

  @media (width <= 900px) {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  color: #f9f9f9;
  background: url("https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif")
    no-repeat center/cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;

  i {
    font-size: 1.1rem;
  }
`;
