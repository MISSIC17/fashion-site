const makeGrids = (length) => {
  let gridDivs = [];
  for (let index = 1; index <= length; index++) {
    gridDivs.push(
      <div
        id={`g${index}`}
        key={`grid-${index}`}
        className="relative grid w-min grid-flow-dense place-items-center"
      >
        <div id={`wrapper-${index}`} className="relative">
          <div className="pre-grid absolute flex align-top justify-center justify-self-center gap-3 transform h-[2ch] rotate-90 -translate-y-full origin-bottom-left">
            <span>Mens</span>
            <span className="relative inline-block h-[1px] w-20 bg-black self-center"></span>
            <span>Shirts</span>
          </div>
          <div
            id="hover-text"
            className="absolute hidden z-[100] transform -translate-x-1/2 -translate-y-1/2"
          >
            <h1 className="text-3xl text-white">Title</h1>
            <h4 className="text-[#eceff4]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              sapiente?
            </h4>
          </div>
          <div
            id={`grid-image-${index}`}
            style={{ backgroundImage: `url('${index}.jpg')` }}
            className={`grid-image h-[27.8em] aspect-[0.75] bg-cover bg-no-repeat bg-center`}
            loading={"lazy"}
          ></div>
        </div>
      </div>
    );
  }
  return gridDivs;
};
export default makeGrids;
// *w-[292px] h-[389px]*/
