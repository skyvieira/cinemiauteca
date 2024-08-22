import React from 'react';

import * as S from "./style";

export default function Index({text}) {
  return (
    <>
      <S.Type>
        {text}
      </S.Type>
    </>
  )
}
