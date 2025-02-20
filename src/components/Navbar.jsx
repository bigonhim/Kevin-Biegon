import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX}  w-full flex items-center py-6 fixed top-0 z-20
       bg-primary [will-change:transform]`}
    >
      <div
        className="w-full flex justify-between items-center 
          max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className=" mx-auto flex flex-col gap-3 items-center sm:mx-0 sm:flex-row  "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Kevin Biegon
          </p>
        </Link>
        <ul className="list-none hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-secondary" : " text-white"
              } hover:text-secondary  text-[18px]
              font-medium cursor-pointer     
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex justify-end items-center z-20">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-tertiary bg-opacity-50 backdrop-blur-lg absolute justify-center 
       right-0 z-10 w-full top-0 `}
      >
        <ul className="list-none mt-16 flex flex-col gap-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? " text-secondary" : "text-white"
              } hover:text-white  text-[18px]
              font-medium cursor-pointer     
              `}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
