function QuestionSection() {
  return (
    <section className="questionsSection">
      <h2>{"Write to us if you have any questions".toUpperCase()}</h2>
      <p>{"info@semenovskyquarter.com".toUpperCase()}</p>
      <div className="iconsDiv">
        <a href="#">
          <img
            src="/Semyonovsky/assets/graphic_assets/letterIcon.png"
            alt=""
            className="letterIcon"
          />
        </a>
        <a href="#">
          <img
            src="/Semyonovsky/assets/graphic_assets/telegramIcon.png"
            alt=""
            className="telegramIcon"
          />
        </a>
      </div>
      <img
        src="/Semyonovsky/assets/graphic_assets/questionMark.png"
        alt=""
        className="questionMark"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets/picture.png"
        alt=""
        className="arrowLogo"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets/listPicture.png"
        alt=""
        className="listPicture"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets/GreenThigyPicture.png"
        alt=""
        className="greenThingy"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets/BIRD.png"
        alt=""
        className="BIRD"
      />
    </section>
  );
}

export default QuestionSection;
