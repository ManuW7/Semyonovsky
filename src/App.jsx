import Header from "./Header.jsx";
import TopSection from "./TopSection.jsx";
import MovingLine from "./MovingLine.jsx";
import WeatherSection from "./WeatherSection.jsx";
import PlaceFactsCardsSection from "./PlaceFactsCardsSection.jsx";
import AboutTheSpaceSection from "./AboutTheSpaceSection.jsx";
import EventCard from "./EventCard.jsx";
import "./assets/fonts/ClashGrotesk_Complete/Fonts/WEB/css/clash-grotesk.css";
import "./assets/fonts/FormulaCondensed/style.css";

function App() {
  return (
    <>
      <Header id="header"></Header>
      <TopSection></TopSection>
      <MovingLine
        movingLineImage="./src/assets/graphic_assets/movingLine.png"
        padding="5px"
      ></MovingLine>
      <WeatherSection
        latitude="59.924718"
        longitude="30.327645"
      ></WeatherSection>
      <PlaceFactsCardsSection></PlaceFactsCardsSection>
      <MovingLine
        movingLineImage="src/assets/graphic_assets/movingLine2.png"
        backgroundColor="#5CD572"
        padding="10px"
      ></MovingLine>
      <AboutTheSpaceSection></AboutTheSpaceSection>
      <EventCard
        size="large"
        pictureLink="./src/assets/graphic_assets/EventsPictures/SoundOfTheCities.png"
        eventName="SOUNDS OF THE CITIES"
        eventDate="JULY 15-16, 12:00 PM - 10:00 PM"
      ></EventCard>
    </>
  );
}

export default App;
