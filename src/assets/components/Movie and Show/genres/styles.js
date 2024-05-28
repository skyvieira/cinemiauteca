import styled from "styled-components";

//gif
import noise from "../../../gif/noise.gif";

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  place-items: center;
  padding: 1rem;
  row-gap: 2rem;

  a {
    width: 17rem;
    height: 10rem;
    text-decoration: none;
  }
`;

export const Card = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #7174bb;
  position: relative;
  transition: all 0.5s linear;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: url(${noise}) no-repeat center/cover;
    background-color: #7174bb;
    background-blend-mode: overlay;
    opacity: 0.15;
  }

  &:hover {
    transform: scale(1.05);

    h2 {
      background: url("https://i.makeagif.com/media/6-26-2022/Kcv935.gif")
        no-repeat center/cover;
      background-clip: text;
      color: transparent;
      text-shadow: none;
    }
  }
`;

export const Title = styled.h2`
  width: 100%;
  font: 700 2rem "Macondo Swash Caps", sans-serif;
  color: #ccc;
  text-shadow: 0 0 0.5rem #000;
  transition: all 1s linear;
`;
