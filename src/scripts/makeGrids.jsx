
const makeGrids = (length) => {
  let gridDivs = [];
  for (let index = 1; index <= length; index++) {
    gridDivs.push(
      <div
        id={`g${index}`}
        key={`grid-${index}`}
        className="grid w-min grid-flow-dense place-items-center"
      >
        <div id="wrapper" className="relative">
          <div className="absolute -left-[2.5ch] md:-left-[5ch] flex align-top justify-center justify-self-center gap-3 transform h-[2ch] rotate-90 -translate-y-full origin-bottom-left">
            <span>Mens</span>
            <span className="relative inline-block h-[1px] w-20 bg-black self-center"></span>
            <span>Shirts</span>
          </div>
          <div
            id="grid-image"
            style={{ backgroundImage: `url('${index}.jpg')` }}
            className={`h-[27.8em] aspect-[0.75] bg-cover bg-no-repeat bg-center`}
            loading={'lazy'}
          ></div>
        </div>
      </div>
    );
  }
  return gridDivs;
};
export default makeGrids;
// *w-[292px] h-[389px]*/