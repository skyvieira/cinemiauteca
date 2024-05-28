import React from "react";

//components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
