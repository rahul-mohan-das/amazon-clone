import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div className="flex flex-col">
      <Header />
      <Navbar />
      <div className="mx-[0.5vw]">{props.children}</div>
    </div>
  );
};

export default Layout;
