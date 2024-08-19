import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });

const NavComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavComponent;
