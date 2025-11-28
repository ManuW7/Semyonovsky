function WhatWeDoPart(props) {
  return (
    <>
      <div
        className={`whatWeDoCard ${props.className}`}
        onMouseOver={props.onMouseOver}
      >
        <div>
          <img
            src="/Semyonovsky/assets/graphic_assets_webp/arrow_black.webp"
            alt=""
          />
          <h3>{props.header}</h3>
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default WhatWeDoPart;
