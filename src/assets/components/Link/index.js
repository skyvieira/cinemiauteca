import React from 'react';

//react-router-dom
import { Link } from 'react-router-dom';

export default function index({to, children}) {

  function goToTop() {
    window.scrollTo(0, 0);
    console.log('goToTop');
  }

  return (
    <>
      <Link to={to} onClick={() => goToTop()}>
        {children}
      </Link>
    </>
  )
}
