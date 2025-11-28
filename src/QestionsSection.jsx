function QuestionSection() {
  return (
    <section className="questionsSection">
      <h2>{"Write to us if you have any questions".toUpperCase()}</h2>
      <p>{"info@semenovskyquarter.com".toUpperCase()}</p>
      <div className="iconsDiv">
        <a href="#">
          <img
            src="/Semyonovsky/assets/graphic_assets_webp/letterIcon.webp"
            alt=""
            className="letterIcon"
          />
        </a>
        <a href="#">
          <img
            src="/Semyonovsky/assets/graphic_assets_webp/telegramIcon.webp"
            alt=""
            className="telegramIcon"
          />
        </a>
      </div>
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/questionMark.webp"
        alt=""
        className="questionMark"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/picture.webp"
        alt=""
        className="arrowLogo"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/listPicture.webp"
        alt=""
        className="listPicture"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/GreenThigyPicture.webp"
        alt=""
        className="greenThingy"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/BIRD.webp"
        alt=""
        className="BIRD"
      />
    </section>
  );
}

export default QuestionSection;
