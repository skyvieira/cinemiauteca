import styled from "styled-components";

export const Logo = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font: 700 2rem/2.5rem "Macondo Swash Caps", cursive;
    color: #f9f9f9;
    background: url("https://i.makeagif.com/media/6-26-2022/Kcv935.gif")
      no-repeat center/cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (width <= 375px) {
    width: 100%;
    padding-left: 1rem;

    a {
      gap: 0.5rem;
    }

    h1 {
      font: 700 1.5rem/2rem "Macondo Swash Caps", cursive;
    }

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
