function EventCard(props) {
  return (
    <div
      className={`eventCard ${props.size} ${props.className || ""}`}
      style={props.style}
    >
      <img src={props.pictureLink} alt="" className="eventPicture" />
      <div className="eventDescription">
        <div className="firstRow">
          <h3 className="eventHeader">{props.eventName}</h3>
          <button className="moreButton">
            <a href={props.eventLink}>
              MORE{" "}
              <img
                src="./src/assets/graphic_assets/arrow_black.png"
                alt=""
                className="arrow black"
              />
            </a>
          </button>
        </div>
        <p className="eventDate">{props.eventDate}</p>
      </div>
    </div>
  );
}

export default EventCard;
