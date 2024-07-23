"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  { name: "Home", path: "/" },
  // { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center">
        <div className="-mt-16 mb-20  text-center text-3xl">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold">
              UM@R<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-5 items-center justify-center">
          {Links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } font-medium hover:text-accent transition-all`}
              >
                <SheetTrigger>{link.name}</SheetTrigger>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
