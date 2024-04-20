import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  place-items: center;
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
  opacity: 0.8;
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-position: calc(100% + 5rem);
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    opacity: 1;

    h2 {
      background: url("https://i.makeagif.com/media/6-26-2022/Kcv935.gif")
        no-repeat center/cover;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: none;
    }
  }
`;

export const Title = styled.h2`
  font: 700 2rem "Macondo Swash Caps", sans-serif;
  color: #ccc;
  text-shadow: 0 0 0.5rem #000;
  transition: all 1s linear;
`;
