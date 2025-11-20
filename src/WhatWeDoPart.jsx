function WhatWeDoPart(props) {
  return (
    <>
      <div
        className={`whatWeDoCard ${props.className}`}
        onMouseOver={props.onMouseOver}
      >
        <div>
          <img src="./src/assets/graphic_assets/arrow_black.png" alt="" />
          <h3>{props.header}</h3>
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default WhatWeDoPart;
