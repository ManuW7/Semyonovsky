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
                <a href="">RESIDENTS</a>
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
                src="./src/assets/graphic_assets/arrow.png"
                alt=""
                className="headerButtonArrow white"
              />
              <img
                src="./src/assets/graphic_assets/arrow_black.png"
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
