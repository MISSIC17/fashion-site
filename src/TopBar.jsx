import React from "react";
import { useEffect, useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
export default function TopBar() {
  const searchBar = useRef("");
  const topBar = useRef("");
  const addClass = (bool) => {
    document.querySelector("#animDiv").classList.toggle("afterInputAnim", bool);
    // if (bool) {
    //   document.querySelector("#animDiv").classList.add("afterInputAnim");
    // } else {
    //   document.querySelector("#animDiv").classList.remove("afterInputAnim");
    // }
  };
  const focusSearch = () => {
    searchBar.current.focus();
    addClass(true);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBar.current && !searchBar.current.contains(event.target)) {
        addClass(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBar]);
  useEffect(() => {
    const handleTopBar = () => {
      let nav = topBar.current;
      let bool = window.scrollY > nav.getBoundingClientRect().top;
      console.table(
        window.scrollY,
        nav.getBoundingClientRect().top,
        window.scrollY > nav.getBoundingClientRect().top + 200
      );
      // console.table(window.scrollY > nav.getBoundingClientRect().top + 200);
      console.log(nav.classList);
      // nav.classList.toggle(
      //   "sticky",
      //   window.scrollY > nav.getBoundingClientRect().top + 300
      // );
      nav.classList.toggle("stickOut", bool);
    };
    window.addEventListener("scroll", () => {
      handleTopBar();
    });
    return () => {
      window.removeEventListener("scroll", handleTopBar);
    };
  }, [topBar]);
  return (
    <div
      ref={topBar}
      id="top-bar"
      className="top-0 grid grid-cols-3 align-middle px-3 bg-white "
    >
      <span id="hero-logo">
        <img alt="Company Logo" src="/Logo.png" className="self-center" />
      </span>
      <span
        id="hero-categories"
        className="flex flex-row justify-around gap-4 self-center"
      >
        <li>Mens</li>
        <li>Womens</li>
        <li>Sport</li>
        <li>Style</li>
        <li>Lookbook</li>
      </span>
      <span
        id="left-content"
        className="flex flex-row gap-3 justify-end self-center"
      >
        <span
          id="hero-search"
          className="flex flex-row gap-2 self-center justify-end"
        >
          <div id="inputWrapper" className="relative grid place-items-center">
            <input
              type="text"
              name="search"
              id="search"
              ref={searchBar}
              onFocus={() => {
                addClass(true);
              }}
            />
            <div id="animDiv" className="afterInput"></div>
          </div>
          <RiSearch2Line
            className="icons cursor-pointer"
            onClick={focusSearch}
          />
        </span>
        <RxHamburgerMenu className="icons hidden self-center " />
      </span>
    </div>
  );
}
