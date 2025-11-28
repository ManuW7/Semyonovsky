function PartnerItem(props) {
  return (
    <a className="partnerItem" href="#">
      <img
        src="/Semyonovsky/assets/graphic_assets_webp/arrow_black.webp"
        alt=""
      />
      <p className="header">{props.header}</p>
      <p className="description">{props.description}</p>
    </a>
  );
}

export default PartnerItem;
