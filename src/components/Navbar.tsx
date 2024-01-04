import React, { useState } from "react";
import { Link } from "react-router-dom";

import { close, menu } from "@/assets";
import { styles } from "@/styles";
import { navLinks } from "@/utils/constants";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} xxs:h-[12vh] fixed top-0 z-20 flex 
      w-full items-center bg-flashWhite py-2 sm:opacity-[0.97]`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            src={logo} // your logo comes here
            alt="logo"
            className="h-[45px] w-[45px] object-contain sm:h-[50px] sm:w-[50px]"
          /> */}
          <span className="font-beckman tracking-[3px]">
            <span className="text-deepRed">{"<"} </span>
            <span className="text-eerieBlack">SD</span>
            <span className="text-deepRed">{" />"}</span>
            <span className="ml-2 text-[18px] font-bold text-eerieBlack">
              sasidhar.dwadasi
            </span>
          </span>
        </Link>
        <ul className="mt-2 hidden list-none flex-row gap-14 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-lightRed" : "text-eerieBlack"
              } nav-links  cursor-pointer font-mova 
                text-[21px] font-medium uppercase tracking-[3px]`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="flex w-screen flex-1 items-center justify-end sm:hidden">
          {toggle ? (
            <div
              className={`menu absolute left-0 top-0 
                z-10 h-[100vh] w-screen bg-flashWhite p-6 opacity-[0.98] ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="h-[22px] w-[22px] cursor-pointer object-contain"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="-gap-[1rem] -ml-[35px] mt-[10rem] flex 
                list-none flex-col items-start justify-end"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-deepRed" : "text-eerieBlack"
                    } cursor-pointer font-arenq text-[88px] 
                      font-bold uppercase tracking-[1px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="h-[34px] w-[34px] cursor-pointer object-contain"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
