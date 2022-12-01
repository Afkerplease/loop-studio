import React from "react";

import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";

function NavBar() {
  return (
    <nav className=" flex items-center justify-between px-8 py-5 ">
      <img src={logo} alt="" />
      <div className="md:hidden">
        <img src={menu} alt="" />
      </div>
      <ul className=" hidden  mr-5 font-Atala text-white md:flex items-center gap-4">
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
    </nav>
  );
}

export default NavBar;
