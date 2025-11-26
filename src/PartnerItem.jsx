function PartnerItem(props) {
  return (
    <a className="partnerItem" href="#">
      <img src="src/assets/graphic_assets/arrow_black.png" alt="" />
      <p className="header">{props.header}</p>
      <p className="description">{props.description}</p>
    </a>
  );
}

export default PartnerItem;
