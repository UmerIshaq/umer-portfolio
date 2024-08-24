import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import React from "react";

const Header = () => {
  return (
    <header className="py-4 lg:py-8  text-white right-0">
      <div className="px-4 lg:px-[7rem] flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            UM@R<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav and Hire me button  */}
        <div className="hidden lg:flex  items-center gap-8 right-0">
          <Nav />
          <Link href={"/contact"}>
            <Button className="">Hire me</Button>
          </Link>
        </div>
        {/* Mobile nav  */}
        <div className="lg:hidden text-white">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
