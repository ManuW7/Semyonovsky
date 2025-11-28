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
          src="/Semyonovsky/assets/graphic_assets_webp/topSectionSticker1.webp"
          alt="sticker"
          className="spaceSticker"
        />
        <img
          src="/Semyonovsky/assets/graphic_assets_webp/topSectionSticker2.webp"
          alt="sticker"
          className="artistsSticker"
        />
      </section>
    </>
  );
}

export default TopSection;
