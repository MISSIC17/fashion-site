import React from "react";
import { useEffect, useRef } from "react";
import { useSpring, useInView, animated } from "@react-spring/web";
import { RiSearch2Line } from "react-icons/ri";
import makeGrids from "./scripts/makeGrids";
export default function Hero() {
  const createSequence = (a, n, length) => {
    let sequence = [];
    for (let i = 0; i <= length; i++) {
      sequence.push(i * n + a);
    }
    return sequence;
  };
  const gridPlacement = () => {
    const gridDivs = document.querySelectorAll("#grid-section>div");
    if (window.innerWidth >= 1024) {
      let count = 0;
      let normalPos = [1, 3];
      let centerPos = [2, 4];
      for (let i = 0; i < gridDivs.length; i++) {
        let firstRow = createSequence(1, 3, gridDivs.length);
        let secondRow = createSequence(3, 3, gridDivs.length);
        let thirdRow = createSequence(2, 3, gridDivs.length);
        let gridNo = i + 1;
        if (count === 2) {
          normalPos[0] += 2;
          normalPos[1] += 2;
          count = 0;
        }
        if (firstRow.includes(gridNo) || thirdRow.includes(gridNo)) {
          gridDivs[i].style.gridRow = `${normalPos[0]}/${normalPos[1]}`;
          if (firstRow.includes(gridNo)) {
            gridDivs[i].style.gridColumn = "1";
          } else {
            gridDivs[i].style.gridColumn = "3";
          }

          count += 1;
        } else if (secondRow.includes(gridNo)) {
          gridDivs[i].style.gridRow = `${centerPos[0]}/${centerPos[1]}`;
          gridDivs[i].style.gridColumn = "2";
          centerPos[0] += 2;
          centerPos[1] += 2;
        }
      }
    } else if (window.innerWidth >= 720) {
      let normalPos = [1, 3];
      let centerPos = [2, 4];
      let firstRow = createSequence(1, 2, gridDivs.length);
      let secondRow = createSequence(2, 2, gridDivs.length);
      for (let i = 0; i < gridDivs.length; i++) {
        let gridNo = i + 1;
        if (firstRow.includes(gridNo)) {
          gridDivs[i].style.gridRow = `${normalPos[0]}/${normalPos[1]}`;
          gridDivs[i].style.gridColumn = "1";
          normalPos[0] += 2;
          normalPos[1] += 2;
        } else if (secondRow.includes(gridNo)) {
          gridDivs[i].style.gridRow = `${centerPos[0]}/${centerPos[1]}`;
          centerPos[0] += 2;
          centerPos[1] += 2;
        }
      }
    } else {
      for (let i = 0; i < gridDivs.length; i++) {
        let gridNo = i + 1;

        gridDivs[i].style.gridRow = `initial`;
        gridDivs[i].style.gridColumn = "1";
      }
    }
  };
  useEffect(() => {
    window.addEventListener("resize", gridPlacement);
    return () => {
      window.removeEventListener("resize", gridPlacement);
    };
  });
  useEffect(() => {
    gridPlacement();
  }, []);
  return (
    <section id="hero-section" className="py-4 px-3 grid">
      <div
        id="grid-section"
        className="grid place-items-center gap-[8em] grid-cols-3 w-fit justify-self-center py-20 transform translate-x-[2%]"
      >
        {makeGrids(8)}
      </div>
    </section>
  );
}
