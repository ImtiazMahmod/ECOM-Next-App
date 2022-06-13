import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - ECOM` : "ECOM"}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        {description && <meta name="description" content={description} />}
      </Head>
      <Header />

      {/* main body */}
      <div className="my-5" style={{ minHeight: "80vh" }}>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
