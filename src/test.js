const gridPlacement = () => {
  const gridDivs = document.querySelectorAll("main>div");
  if (window.innerWidth >= 1024) {
    const createSequence = (a, n, length) => {
      let sequence = [];
      for (let i = 0; i <= length; i++) {
        sequence.push(i * n + a);
      }
      return sequence;
    };
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
    for (let i = 0; i < gridDivs.length; i++) {
      // let firstRow = createSequence(1,3,gridDivs.length);
      // let secondRow = createSequence(3,3,gridDivs.length);
      // let thirdRow = createSequence(2,3,gridDivs.length);
      let gridNo = i + 1;
      // if(count === 2){

      //   count = 0;
      // }
      if (gridNo % 2 !== 0) {
        gridDivs[i].style.gridRow = `${normalPos[0]}/${normalPos[1]}`;
      } else if (gridNo % 2 === 0) {
        gridDivs[i].style.gridRow = `${centerPos[0]}/${centerPos[1]}`;
        gridDivs[i].style.gridColumn = "2";
      }
      centerPos[0] += 2;
      centerPos[1] += 2;
      normalPos[0] += 2;
      normalPos[1] += 2;
    }
  }
};
window.addEventListener("onLoad", () => {
  gridPlacement();
});
window.addEventListener("resize", () => {
  gridPlacement();
});
