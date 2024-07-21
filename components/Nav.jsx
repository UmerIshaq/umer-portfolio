"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", path: "/" },
  // { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];
const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8 items-center">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            } font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
