import { useState } from "react";
import WhatWeDoPart from "./WhatWeDoPart";

function WhatWeDoSection() {
  const [hoveredCard, setHoveredCard] = useState("events");
  let pictureUrl = "./src/assets/graphic_assets/WhatWeDoEvents.png";
  const pictures = {
    events: "./src/assets/graphic_assets/WhatWeDoEvents.png",
    residents: "./src/assets/graphic_assets/WhatWeDoResidents.png",
    partners: "./src/assets/graphic_assets/WhatWeDoPartners.png",
  };

  function handleHover(card) {
    setHoveredCard(card);
  }

  pictureUrl = pictures[hoveredCard];

  console.log(pictureUrl);

  return (
    <section className="whatWeDoSection">
      <h3 className="sectionHeader">[WHAT WE DO]</h3>
      <WhatWeDoPart
        header="EVENTS"
        text="The art space is a cultural center that hosts over 50 events each year, including exhibitions and concerts. These events are open to everyone and foster the exchange of ideas while supporting local talent."
        onMouseOver={() => handleHover("events")}
      ></WhatWeDoPart>
      <WhatWeDoPart
        className="middle"
        header="RESIDENTS"
        text="The art space is home to more than 100 creative professionals, forming a unique community. Residents have access to workshops and exhibition areas, helping them develop their projects and establish connections."
        onMouseOver={() => handleHover("residents")}
      ></WhatWeDoPart>
      <WhatWeDoPart
        header="PARTNERS"
        text="The art space actively collaborates with local companies, creating mutually beneficial partnerships. Partners can participate in events and promote their brands, contributing to the development of cultural initiatives in the area."
        onMouseOver={() => handleHover("partners")}
      ></WhatWeDoPart>
      <img src={pictureUrl} alt="" className="sectionPicture" />
    </section>
  );
}

export default WhatWeDoSection;
