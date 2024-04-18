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
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const TitleBox = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 700 4rem "B612", sans-serif;
  color: #f9f9f9;
  padding: 1rem 0;
  text-align: center;
`;

export const Info = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Poster = styled.section`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1.25rem;
  filter: drop-shadow(0 0 0.5rem #000);
  cursor: pointer;

  img {
    width: 20rem;
    height: 30rem;
    object-fit: cover;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Details = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Sinopse = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font: 400 1.25rem/2rem "B612", sans-serif;
  color: #f9f9f9;
  text-align: justify;
`;

export const DetailsInfo = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    padding-left: 2rem;
  }
`;

export const ReleaseDate = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font: 400 1.25rem/2rem "B612", sans-serif;
  color: #f9f9f9;

  p {
    position: relative;

    &::before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      background: url("https://img.icons8.com/ios/50/ffffff/calendar--v1.png")
        no-repeat center/cover;
      position: absolute;
      left: 0rem;
      top: 0.1rem;
    }
  }
`;

export const Genre = styled.section`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font: 400 1.25rem/2rem "B612", sans-serif;
  color: #f9f9f9;
  position: relative;

  p {
    position: relative;

    &::before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      background: url("https://img.icons8.com/ios/50/ffffff/movie.png")
        no-repeat center/cover;
      position: absolute;
      left: 0rem;
      top: 0.1rem;
    }
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
    width: 10rem;
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
    font: 400 1.25rem/2rem "B612", sans-serif;
    color: #000;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
      border: 0.1rem solid #f9f9f9;
      background: url("https://i.pinimg.com/originals/36/d1/40/36d1403defc5f8b92b13e194985341f2.gif")
        no-repeat center/cover;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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