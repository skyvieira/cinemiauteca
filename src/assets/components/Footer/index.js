import React from "react";

//Gif
import icon from "../../gif/cat.gif";

//Styles
import * as S from "./styles";

//images
import GithubIcon from "../../img/github.svg";

export default function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.AppInfo>
          <S.Icon src={icon} alt="Cat icon" />
          <S.Text>
            Cinemiauteca é um projeto pessoal em conjunto de amigos que adoram
            cinema.
          </S.Text>
          <S.Copy>&copy; Copyrights. All rights reserved.</S.Copy>
        </S.AppInfo>
        <S.SocialMedia>
          <h2>Nos encontre</h2>
          <S.Links>
            <S.Profile>
              <p>Gustavo</p>
              <a href="https://github.com/12Gustavo21" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github icon" />
              </a>
            </S.Profile>
            <S.Profile>
              <p>Sky</p>
              <a href="https://github.com/liviavieira" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="Github icon" />
              </a>
            </S.Profile>
          </S.Links>
        </S.SocialMedia>
      </S.Wrapper>
    </S.Footer>
  );
}
