function EventCard(props) {
  return (
    <>
      <div className={`eventCard ${props.size}`}>
        <img src={props.pictureLink} alt="" className="eventPicture" />
        <div className="eventDescription">
          <div className="eventDescriptionText">
            <h3 className="eventHeader">{props.eventName}</h3>
            <p className="eventDate">{props.eventDate}</p>
          </div>

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
      </div>
    </>
  );
}

export default EventCard;
