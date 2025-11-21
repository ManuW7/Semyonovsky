import Header from "./Header.jsx";
import TopSection from "./TopSection.jsx";
import MovingLine from "./MovingLine.jsx";
import WeatherSection from "./WeatherSection.jsx";
import PlaceFactsCardsSection from "./PlaceFactsCardsSection.jsx";
import AboutTheSpaceSection from "./AboutTheSpaceSection.jsx";
import EventsCardsSection from "./EventsCardsSection.jsx";
import WhatWeDoSection from "./WhatWeDoSection.jsx";
import ResidentsSection from "./ResidentsSection.jsx";
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
      <EventsCardsSection></EventsCardsSection>
      <WhatWeDoSection></WhatWeDoSection>
      <ResidentsSection></ResidentsSection>
    </>
  );
}

export default App;
