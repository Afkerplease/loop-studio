import React, { useState } from "react";

import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import menuClose from "../images/icon-close.svg";

function NavBar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const clickHandler = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <nav className=" flex items-center lg:py-10 lg:px-20 lg:w-[100%] justify-between px-8 py-5 ">
      <img src={logo} alt="" />
      <div className="md:hidden">
        <button onClick={clickHandler}>
          <img src={menu} alt="" />
        </button>
      </div>
      <ul className=" hidden  mr-5 font-Atala text-white md:flex items-center lg:gap-8 gap-4">
        <li>
          <a href="#" className=" hover:border-b-2 border-White">
            About
          </a>
        </li>
        <li>
          <a href="#" className=" hover:border-b-2 border-White">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className=" hover:border-b-2 border-White">
            Events
          </a>{" "}
        </li>
        <li>
          <a href="#" className=" hover:border-b-2 border-White">
            Products
          </a>{" "}
        </li>
        <li>
          <a href="#" className=" hover:border-b-2 border-White">
            Support
          </a>{" "}
        </li>
      </ul>
      {menuClicked && (
        <div className=" md:hidden bg-Black absolute transition-all ease-out duration-150 top-0 py-4 h-[100vh] z-10 right-[11%] w-[375px] ">
          <div className=" flex pt-2 px-8 justify-between">
            <img src={logo} alt="" />
            <button onClick={clickHandler}>
              {" "}
              <img src={menuClose} alt="" />{" "}
            </button>
          </div>
          <ul className=" px-4 mt-20   font-josephine uppercase text-white flex-col flex items-start lg:gap-8 gap-10">
            <li>
              <a href="#" className=" hover:border-b-2 text-2xl border-White">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" hover:border-b-2 text-2xl border-White">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className=" hover:border-b-2 text-2xl border-White">
                Events
              </a>{" "}
            </li>
            <li>
              <a href="#" className=" hover:border-b-2 text-2xl border-White">
                Products
              </a>{" "}
            </li>
            <li>
              <a href="#" className=" hover:border-b-2 text-2xl border-White">
                Support
              </a>{" "}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
