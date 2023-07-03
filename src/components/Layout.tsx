import IndexPage from "../components/title";
import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";


const Layout: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <>
      <IndexPage title="Danmark" />
      <div className=" scroll-smooth">
        <header className="fixed w-full">
          <Nav />
        </header>
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
