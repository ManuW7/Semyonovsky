import EventCard from "./EventCard.jsx";
import { useWindowWidth } from "./assets/hooks/useWindowWidth.js";
import { events } from "./assets/events.js";
import { useState } from "react";

function EventsCardsSection() {
  const windowWidth = useWindowWidth();
  let sectionSize;
  let largeCards = [];
  let smallCards = [];
  let midCards = [];

  const [filter, setFilter] = useState();

  const filteredEvents = filter
    ? events.filter((item) => item.type === filter)
    : events;

  if (windowWidth > 770) {
    largeCards = filteredEvents.slice(0, 2);
    smallCards = filteredEvents.slice(2, 6);
    midCards = filteredEvents.slice(6, 9);
    sectionSize = "large";
  } else if (windowWidth > 360) {
    smallCards = filteredEvents.slice(0, 8);
    sectionSize = "mid";
  } else {
    smallCards = filteredEvents.slice(0, 4);
    sectionSize = "small";
  }

  function handleClick(type) {
    if (filter === type) {
      setFilter(null);
    } else {
      setFilter(type);
    }
  }

  return (
    <>
      <section className="eventsSection">
        <div className="eventsSectionHeader">
          <p className="eventsSectionSign">[EVENTS]</p>
          <div className="eventsButtonsDiv">
            <button
              className={`festButton ${filter == "FEST" ? "active" : ""}`}
              onClick={() => handleClick("FEST")}
            >
              FEST
            </button>
            <button
              className={`concertButton ${filter == "CONCERT" ? "active" : ""}`}
              onClick={() => handleClick("CONCERT")}
            >
              CONCERT
            </button>
            <button
              className={`exhibitionButton ${
                filter == "EXHIBITION" ? "active" : ""
              }`}
              onClick={() => handleClick("EXHIBITION")}
            >
              EXHIBITION
            </button>
            <button className="moreButton">
              <div className="moreButtonContents">
                <p>MORE</p>
                <img
                  src="./src/assets/graphic_assets/arrow.png"
                  alt=""
                  className="moreButtonArrow white"
                />
                <img
                  src="./src/assets/graphic_assets/arrow_black.png"
                  alt=""
                  className="moreButtonArrow black"
                />
              </div>
            </button>
          </div>
        </div>
        <div className={`eventsContainer ${sectionSize}`}>
          {largeCards.map((item, index) => (
            <EventCard
              size="large"
              key={item.id}
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventLink={item.eventLink}
              pictureLink={item.pictureLink}
              className="fadeIn"
              style={{ animationDelay: `${index * 120}ms` }}
            ></EventCard>
          ))}
          {midCards.map((item, index) => (
            <EventCard
              size="mid"
              key={item.id}
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventLink={item.eventLink}
              pictureLink={item.pictureLink}
              className="fadeIn"
              style={{ animationDelay: `${index * 120}ms` }}
            ></EventCard>
          ))}
          {smallCards.map((item, index) => (
            <EventCard
              size="small"
              key={item.id}
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventLink={item.eventLink}
              pictureLink={item.pictureLink}
              className="fadeIn"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            ></EventCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default EventsCardsSection;
