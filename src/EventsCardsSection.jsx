import EventCard from "./src/EventCard.jsx";
import { useWindowWidth } from "./assets/hooks/useWindowWidth.js";
import { events } from "./src/assets/events.js";

function EventsCardsSection() {
  const windowWidth = useWindowWidth();
  let sectionSize;
  let largeCards = [];
  let smallCards = [];
  let midCards = [];

  if (windowWidth > 770) {
    largeCards = events.slice(0, 2);
    smallCards = events.slice(2, 6);
    midCards = events.slice(6, 9);
    sectionSize = "large";
  } else if (windowWidth > 360) {
    smallCards = events.slice(0, 8);
    sectionSize = "mid";
  } else {
    smallCards = events.slice(0, 4);
    sectionSize = "small";
  }

  return (
    <>
      <section>
        <div className={`eventsContainer ${sectionSize}`}>
          {largeCards.map((item) => (
            <EventCard
              size="large"
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventLink={item.eventLink}
            ></EventCard>
          ))}
          {midCards.map((item) => (
            <EventCard
              size="mid"
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventLink={item.eventLink}
            ></EventCard>
          ))}
          {smallCards.map((item) => (
            <EventCard
              size="small"
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventLink={item.eventLink}
            ></EventCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default EventsCardsSection;
