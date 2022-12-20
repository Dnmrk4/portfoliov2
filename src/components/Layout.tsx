import IndexPage from "../components/title";
import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Design from "./Design";


const Layout: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <>
      <IndexPage title="Danmark" />
      <div className="scroll-smooth">
        <div className="fixed w-full ">
          <Nav />
        </div>
        {children}

        <Footer />
        <Design />
      </div>
    </>
  );
};
export default Layout;
