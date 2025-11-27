function TopSection() {
  return (
    <>
      <section>
        <div className="topSectionWrapper">
          <h1 className="semyonovskyHeader">SEMYONOVSKY</h1>
          <h1 className="quarterHeader">QUARTER</h1>

          <div className="topSectionAnnotationDiv">
            <p className="topSectionAnnotation">
              A PLACE WHERE CREATIVITY MEETS COMFORT
            </p>
          </div>
        </div>
        <img
          src="/Semyonovsky/assets/graphic_assets/topSectionSticker1.png"
          alt="sticker"
          className="spaceSticker"
        />
        <img
          src="/Semyonovsky/assets/graphic_assets/topSectionSticker2.png"
          alt="sticker"
          className="artistsSticker"
        />
      </section>
    </>
  );
}

export default TopSection;
