import React from "react";

import "./styles.scss";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}