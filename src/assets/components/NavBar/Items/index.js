import React from "react";

//Styles
import * as S from "./styles";

//Components
import Link from "../../Link";

export default function index() {
  return (
    <>
      <S.List>
        <S.Item>
          <i class="fa-solid fa-house"></i>
          <Link to="/">Início</Link>
        </S.Item>
        <S.Item>
          <i class="fa-solid fa-clapperboard"></i>
          <Link to="/movies">Filmes</Link>
        </S.Item>
        <S.Item>
          <i class="fa-solid fa-tv"></i>
          <Link to="/shows">Séries</Link>
        </S.Item>
        <S.Item>
          <i class="fa-solid fa-search"></i>
          <Link to="/search">Pesquisar</Link>
        </S.Item>
      </S.List>
    </>
  );
}
