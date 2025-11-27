import { useState } from "react";
import { residents } from "./assets/residents.js";
import Resident from "./Resident";

function ResidentsSection() {
  const [currentImage, setCurrentImage] = useState(
    "./src/assets/graphic_assets/ResidentsPictures/ArtisanCafe.png"
  );

  const res = residents.slice(0, 12);

  function handleHover(item) {
    setCurrentImage(item.imageUrl);
  }

  return (
    <section className="residentsSection" id="residentsSection">
      <div className="residentsHeader">
        <h3 className="sectionHeader">[RESIDENTS]</h3>
        <a href="#">MORE</a>
      </div>
      <div className="residents">
        <img src={currentImage} alt="" className="residencePicture " />
        <div className="residentsContainer">
          {res.map((item, index) => (
            <Resident
              name={item.name.toUpperCase()}
              description={item.description.toUpperCase()}
              area={item.area.toUpperCase()}
              imageURL={item.imageUrl}
              key={index}
              onMouseOver={() => handleHover(item)}
              className="fadeIn"
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
              link={item.link}
            ></Resident>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResidentsSection;
