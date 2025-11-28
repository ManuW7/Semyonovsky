function PlaceFactsCardsSection() {
  return (
    <>
      <section>
        <div className="placeFactsCardsWrapper">
          <div className="placeCard greenAreas">
            <div className="placeFactCardTextWrapper">
              <p className="placeFactCardHeader">Green Areas</p>
              <div className="placeFactWrapperDiv">
                <p className="placeFact">5.000 M</p>
                <p className="squared">2</p>
              </div>
            </div>
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/greenCircle.webp"
              alt="greenCircle"
              className="bigGreenCircle"
            />
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/circleGraphPicture.webp"
              alt=""
              className="circleGraphPicture"
            />
          </div>

          <div className="placeCard restaurants">
            <div className="placeFactCardTextWrapper">
              <p className="placeFactCardHeader">Restaurants</p>
              <div className="placeFactWrapperDiv">
                <p className="placeFact">15+</p>
              </div>
            </div>
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/greenThingForSecondCard.webp"
              alt=""
              className="greenThingy"
            />
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/lightGreenCircle.webp"
              alt=""
              className="lightGreenCircle"
            />
          </div>

          <div className="placeCard shops">
            <div className="placeFactCardTextWrapper">
              <p className="placeFactCardHeader">Shops</p>
              <div className="placeFactWrapperDiv">
                <p className="placeFact">30+</p>
              </div>
            </div>
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/greenCircle.webp"
              alt="greenCircle"
              className="bigGreenCircle"
            />
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/greenArrowsSquare.webp"
              alt=""
              className="arrowsSquare"
            />
          </div>

          <div className="placeCard artists">
            <div className="placeFactCardTextWrapper">
              <p className="placeFactCardHeader">Artists</p>
              <div className="placeFactWrapperDiv">
                <p className="placeFact">100</p>
              </div>
            </div>
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/lightGreenCircle.webp"
              alt=""
              className="lightGreenCircle"
            />
            <img
              src="/Semyonovsky/assets/graphic_assets_webp/greenSnowflake.webp"
              alt=""
              className="greenSnowflake"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PlaceFactsCardsSection;
