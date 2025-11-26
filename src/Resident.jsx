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
        ABOUT <img src="src/assets/graphic_assets/arrow_black.png" alt="" />
      </a>
    </div>
  );
}

export default Resident;
