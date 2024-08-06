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
          <Link to="/">Home</Link>
        </S.Item>
        <S.Item>
          <i class="fa-solid fa-clapperboard"></i>
          <Link to="/movies">Movies</Link>
        </S.Item>
        <S.Item>
          <i class="fa-solid fa-tv"></i>
          <Link to="/shows">Shows</Link>
        </S.Item>
      </S.List>
    </>
  );
}
