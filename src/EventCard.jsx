function EventCard(props) {
  return (
    <div
      className={`eventCard ${props.size} ${props.className || ""}`}
      style={props.style}
    >
      <div className="eventCardInner">
        <img src={props.pictureLink} alt="" className="eventPicture" />
        <div className="eventDescription">
          <div className="firstRow">
            <h3 className="eventHeader">{props.eventName}</h3>
            <a href={props.eventLink} className="moreButton">
              MORE{" "}
              <img
                src="/Semyonovsky/assets/graphic_assets/arrow_black.png"
                alt=""
                className="arrow black"
              />
            </a>
          </div>
          <p className="eventDate">{props.eventDate}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
