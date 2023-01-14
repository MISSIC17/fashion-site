import React from "react";
import { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
export default function TopBar() {
  const searchBar = useRef("");
  const topBar = useRef("");
  const addClass = (bool) => {
    document.querySelector("#animDiv").classList.toggle("afterInputAnim", bool);
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
      nav.classList.toggle("stickOut", bool);
    };
    window.addEventListener("scroll", () => {
      handleTopBar();
    });
    return () => {
      window.removeEventListener("scroll", handleTopBar);
    };
  }, [topBar]);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const handleBurger = () => {
    setBurgerOpen(!burgerOpen);
    document
      .querySelector("#hero-categories")
      .classList.add("hero-categories-responsive", "hero-categories-f-anim");
    document
      .querySelector("#hero-categories")
      .classList.remove("hero-categories-b-anim");
    document.body.style.overflow = "hidden";
  };
  const handleCloseBurger = () => {
    document
      .querySelector("#hero-categories")
      .classList.add("hero-categories-b-anim");
    setTimeout(() => {
      document
        .querySelector("#hero-categories")
        .classList.remove(
          "hero-categories-responsive",
          "hero-categories-f-anim"
        );

      document.body.style.overflow = "auto";
      setBurgerOpen(!burgerOpen);
    }, 300);
  };
  return (
    <div
      ref={topBar}
      id="top-bar"
      className="top-0 grid grid-cols-3 align-middle px-3 bg-white "
    >
      <span id="hero-logo">
        <img alt="Company Logo" src="/Logo.png" className="self-center" />
      </span>
      <span id="hero-categories" className="hero-categories">
        <li>Mens</li>
        <li>Womens</li>
        <li>Sport</li>
        <li>Style</li>
        <li>Lookbook</li>
        {burgerOpen && (
          <IconContext.Provider value={{ color: "#fff" }}>
            <RxCross1
              id="top-cross-btn"
              className="h-[2em] w-[2em] absolute top-6 right-6 transform hover:scale-105"
              onClick={handleCloseBurger}
            />
          </IconContext.Provider>
        )}
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
        <RxHamburgerMenu
          id="hamburger"
          className="icons self-center hidden "
          onClick={handleBurger}
        />
      </span>
    </div>
  );
}
