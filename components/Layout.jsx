import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, product }) => {
  return (
    <div className="layout">
      <Head>
        <title>TREND UP</title>
      </Head>
      <Navbar product={product} />
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
