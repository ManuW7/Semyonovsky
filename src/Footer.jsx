function Footer() {
  return (
    <section className="footerSection">
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/wallAsset.webp"
        alt=""
        className="wallFooter"
      />
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/greenBIRD.webp"
        alt=""
        className="BIRDFooter"
      />
      <a href="#" className="footerLogo">
        {"Semyonovsky".toUpperCase()}
      </a>
      <ul>
        <li>
          <a href="#eventsSection">EVENTS</a>
        </li>
        <li>
          <a href="#residentsSection">RESIDENTS</a>
        </li>
        <li>
          <a href="#whatWeDoSection">ABOUT US</a>
        </li>
        <li>
          <a href="#mapSection">MAP</a>
        </li>
      </ul>
      <div>
        <h2>CONTACTS</h2>
        <p>info@semenovskyquarter.com</p>
        <p>contact@semenovskyquarter.org</p>
      </div>
    </section>
  );
}

export default Footer;
