function Header() {
  return (
    <>
      <header>
        <div className="headerWrapper">
          <a href="#header">
            <p className="mainPageLogo">SEMYONOVSKY</p>
          </a>
          <nav>
            <ul>
              <li>
                <a href="#eventsSection">EVENTS</a>
              </li>
              <li>
                <a href="#residentsSection">RESIDENTS</a>
              </li>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">MAP</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </nav>
          <button>
            <div className="headerButtonDiv">
              <p className="headerButtonText">CONTACT US</p>
              <img
                src="/Semyonovsky/assets/graphic_assets_webp/arrow.webp"
                alt=""
                className="headerButtonArrow white"
              />
              <img
                src="/Semyonovsky/assets/graphic_assets_webp/arrow_black.webp"
                alt=""
                className="headerButtonArrow black"
              />
            </div>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
