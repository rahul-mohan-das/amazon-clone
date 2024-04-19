import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Links from "./Links";
const Layout = (props) => {
  return (
    <div className="flex flex-col">
      <Header />
      <Navbar />
      <div className="mx-[0.5vw]">{props.children}</div>
      <Links/>
    </div>
  );
};

export default Layout;
