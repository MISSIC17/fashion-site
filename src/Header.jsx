import React from "react";
import { BsPlus } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";

import { IconContext } from "react-icons/lib";
function Header() {
  return (
    <section
      id="header-section"
      className="w-full grid grid-cols-[1fr_auto_1fr] py-5 px-2 shadow-md relative z-20"
    >
      <span id="header-country" className="flex flex-row align-center self-center whitespace-nowrap flex-nowrap">
        <span className="grid align-center">Nepal</span>
        <BsPlus className="h-[16px] w-[16px] self-center" />
      </span>
      <span
        id="header-center"
        className=" flex align-center text-[#808080] self-center justify-self-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum
        consequuntur quidem amet.
      </span>
      <span id="header-left" className="flex align-center flex-row self-center justify-end">
        <span id="header-login">Log-in</span>
        <span
          id="header-left-separator"
          className="h-[2ch] w-[2px] bg-black mx-3 self-center"
        ></span>
        <span id="header-register">Register</span>
        <span id="header-shop" className="h-fit w-fit ml-4 self-center">
          <BiShoppingBag className="icons" />
        </span>
      </span>
    </section>
  );
}
export default Header;
