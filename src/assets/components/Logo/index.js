import React from "react";

// //React Router
// import { Link } from "react-router-dom";

//Assets
import Cat from "../../gif/cat.gif";

//Styles
import * as S from "./styles";

//components
import Link from "../Link";

export default function index() {
  return (
    <>
      <S.Logo>
        <Link to="/">
          <h1>Cinemiauteca</h1>
          <img src={Cat} alt="Cat icon" />
        </Link>
      </S.Logo>
    </>
  );
}
