function Resident(props) {
  return (
    <div
      className={`resident ${props.className || ""}`}
      onMouseOver={props.onMouseOver}
      style={props.style}
    >
      <h4 className="residentName">{props.name}</h4>
      <p className="residentDescription">{props.description}</p>
      <p className="residentArea">{props.area}</p>

      <a href={props.link}>
        ABOUT{" "}
        <img
          src="/Semyonovsky/assets/graphic_assets_webp/arrow_black.webp"
          alt=""
        />
      </a>
    </div>
  );
}

export default Resident;
