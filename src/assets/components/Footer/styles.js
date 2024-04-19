import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 30vh;
  background-color: #221833;
  margin-top: 5rem;

  @media only screen and (width <= 650px) {
    height: auto;
    padding: 2rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 3rem;

  @media only screen and (width <= 650px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Text = styled.p`
  color: #f9f9f9;
  font: 400 1rem "B612", sans-serif;
`;

export const Copy = styled.p`
  color: #f9f9f9;
  font: 400 0.8rem "B612", sans-serif;
`;

export const SocialMedia = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;

  h2 {
    color: #f9f9f9;
    font: 700 1.5rem "B612", sans-serif;
  }

  @media only screen and (width <= 650px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  p {
    color: #f9f9f9;
    font: 400 1rem "B612", sans-serif;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #f9f9f9;
    border-radius: 50%;

    img {
      width: 1.5rem;
      height: 1.5rem;
      transition: all 0.3s linear;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }

  @media only screen and (width <= 650px) {
    justify-content: flex-start;
  }
`;
