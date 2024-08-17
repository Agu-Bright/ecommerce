"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });
const Sidebar = dynamic(() => import("@components/Sidebar"), { ssr: false });

const page = () => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
    </>
  );
};

export default page;
