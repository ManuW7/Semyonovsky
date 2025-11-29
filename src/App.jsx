import Header from "./Header.jsx";
import TopSection from "./TopSection.jsx";
import MovingLine from "./MovingLine.jsx";
import WeatherSection from "./WeatherSection.jsx";
import PlaceFactsCardsSection from "./PlaceFactsCardsSection.jsx";
import AboutTheSpaceSection from "./AboutTheSpaceSection.jsx";
import EventsCardsSection from "./EventsCardsSection.jsx";
import WhatWeDoSection from "./WhatWeDoSection.jsx";
import ResidentsSection from "./ResidentsSection.jsx";
import MapSection from "./MapSection.jsx";
import PartnersSection from "./PartnersSection.jsx";
import QuestionSection from "./QestionsSection.jsx";
import Footer from "./Footer.jsx";
import ArrowToPageStart from "./ArrowToPageStart.jsx";
import "./assets/fonts/ClashGrotesk_Complete/Fonts/WEB/css/clash-grotesk.css";
import "./assets/fonts/FormulaCondensed/style.css";

function App() {
  return (
    <>
      <Header id="header"></Header>
      <TopSection></TopSection>
      <ArrowToPageStart></ArrowToPageStart>
      <MovingLine
        movingLineImage="/Semyonovsky/assets/graphic_assets_webp/movingLine.webp"
        padding="5px"
      ></MovingLine>
      <WeatherSection
        latitude="59.924718"
        longitude="30.327645"
      ></WeatherSection>
      <PlaceFactsCardsSection></PlaceFactsCardsSection>
      <MovingLine
        movingLineImage="/Semyonovsky/assets/graphic_assets_webp/movingLine2.webp"
        backgroundColor="#5CD572"
        padding="10px"
      ></MovingLine>
      <AboutTheSpaceSection></AboutTheSpaceSection>
      <EventsCardsSection></EventsCardsSection>
      <WhatWeDoSection></WhatWeDoSection>
      <ResidentsSection></ResidentsSection>
      <MapSection></MapSection>
      <PartnersSection></PartnersSection>
      <QuestionSection></QuestionSection>
      <MovingLine
        movingLineImage="/Semyonovsky/assets/graphic_assets_webp/movingLine.webp"
        padding="5px"
      ></MovingLine>
      <Footer></Footer>
    </>
  );
}

export default App;
