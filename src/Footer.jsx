function Footer() {
  return (
    <section className="footerSection">
      <img
        src="public/assets/graphic_assets_webp/wallAsset.webp"
        alt=""
        className="wallFooter"
      />
      <img
        src="public/assets/graphic_assets_webp/greenBIRD.webp"
        alt=""
        className="BIRDFooter"
      />
      <a href="#" className="footerLogo">
        {"Semyonovsky".toUpperCase()}
      </a>
      <ul>
        <li>EVENTS</li>
        <li>RESIDENTS</li>
        <li>ABOUT US</li>
        <li>MAP</li>
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
