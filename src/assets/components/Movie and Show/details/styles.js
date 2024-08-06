import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.background}) no-repeat center/cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  @media only screen and (width <= 950px) {
    padding: 5rem 0;
    height: auto;
  }

  @media only screen and (width <= 600px) {
    padding: 3rem 0 0 0;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;

  @media only screen and (width <= 600px) {
    justify-content: space-between;
  }
`;

export const TitleBox = styled.section`
  width: 100%;
  height: auto;
  text-wrap: balance;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font: 700 4rem "B612", sans-serif;
  color: #f9f9f9;
  padding: 1rem;
  text-align: center;

  @media only screen and (width <= 1024px) {
    font-size: 3rem;
  }

  @media only screen and (width <= 950px) {
    align-items: center;
  }

  @media only screen and (width <= 600px) {
    font-size: 2.5rem;
    align-items: center;
  }
`;

export const Info = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (width <= 950px) {
    flex-direction: column;
  }

  @media only screen and (width <= 600px) {
    padding: 2rem 0;
    background: linear-gradient(360deg, #1a1d29 30%, transparent 70%);
    border-radius: 1.25rem 1.25rem 0 0;
  }
`;

export const PosterWrapper = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;

  @media only screen and (width <= 950px) {
    width: 35%;
    padding: 3rem 0;
  }

  @media only screen and (width <= 600px) {
    display: none;
  }
`;

export const Poster = styled.figure`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 0 0.5rem #000);
  overflow: hidden;
  cursor: pointer;
  border-radius: 1.25rem;

  img {
    width: 16rem;
    height: 100%;
    border-radius: 1.25rem;
    object-fit: cover;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media only screen and (width <= 950px) {
    img {
      width: 100%;
    }
  }
`;

export const Details = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (width <= 950px) {
    width: 80%;
  }
`;

export const Sinopse = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font: 400 1.1rem/1.5rem "B612", sans-serif;
  color: #f9f9f9;
  text-align: justify;
  text-wrap: pretty;
`;

export const DetailsInfo = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1rem;

  p {
    padding-left: 2rem;
  }

  @media only screen and (width <= 950px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ReleaseDate = styled.section`
  width: calc(50% + 1rem);
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font: 400 1rem/2rem "B612", sans-serif;
  color: #f9f9f9;

  p {
    position: relative;

    &::before {
      content: "";
      width: 1.3rem;
      height: 1.3rem;
      background: url("https://img.icons8.com/ios/50/ffffff/calendar--v1.png")
        no-repeat center/cover;
      position: absolute;
      left: 0rem;
      top: 0.1rem;
    }
  }

  @media only screen and (width <= 950px) {
    width: 100%;
  }
`;

export const Genre = styled.section`
  width: calc(50% + 1.5rem);
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font: 400 1rem/2rem "B612", sans-serif;
  color: #f9f9f9;
  position: relative;

  p {
    position: relative;

    &::before {
      content: "";
      width: 1.3rem;
      height: 1.3rem;
      background: url("https://img.icons8.com/ios/50/ffffff/movie.png")
        no-repeat center/cover;
      position: absolute;
      left: 0;
      top: 0.3rem;
    }
  }

  @media only screen and (width <= 950px) {
    width: 100%;
  }
`;

export const GoBack = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    text-decoration: none;
  }

  button {
    width: 8rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    background: linear-gradient(
      90deg,
      #eae3da,
      #bfe6ef,
      #e1e3f5,
      #e6badd,
      #e8f6ef
    );
    font: 400 1.2rem/2rem "B612", sans-serif;
    color: #000;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
      border: 0.1rem solid #f9f9f9;
      background: url("https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif")
        no-repeat center/cover;
      background-clip: text;
      color: transparent;
    }
  }
`;

export const SimilarTitle = styled.h1`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 2rem "B612", sans-serif;
  color: #f9f9f9;
  padding: 1rem 0;
`;
