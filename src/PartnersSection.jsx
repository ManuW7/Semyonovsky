import PartnerItem from "./PartnerItem";

function PartnersSection() {
  return (
    <section className="partnersSection">
      <h3 className="sectionHeader">[PARTNERS]</h3>
      <div className="partners">
        <div className="partnersContainer">
          <PartnerItem
            header={"Inspire".toUpperCase()}
            description="Collaborate on workshops and exhibitions, offering hands-on experience in a vibrant art environment."
          ></PartnerItem>
          <PartnerItem
            header={"Echo".toUpperCase()}
            description="Collaborate with media outlets for event coverage, boosting awareness and attendance."
          ></PartnerItem>
          <PartnerItem
            header={"Heritage".toUpperCase()}
            description="Partner for events that enhance cultural exchange, showcasing contemporary and historical art."
          ></PartnerItem>
          <PartnerItem
            header={"Savor".toUpperCase()}
            description="Partner with food vendors to offer refreshments during events, enhancing the attendee experience."
          ></PartnerItem>{" "}
          <PartnerItem
            header={"Vision".toUpperCase()}
            description="Promote events together, using creative marketing strategies to attract diverse audiences."
          ></PartnerItem>
          <PartnerItem
            header={"Innovate".toUpperCase()}
            description="Integrate digital installations and virtual experiences, showcasing engaging art forms."
          ></PartnerItem>
          <PartnerItem
            header={"Unity".toUpperCase()}
            description="Support community art initiatives, fostering inclusivity and accessibility for local artists."
          ></PartnerItem>
          <PartnerItem
            header={"Explore".toUpperCase()}
            description="Promote the Semenovsky Quarter as a cultural destination for visitors seeking unique experiences."
          ></PartnerItem>
          <PartnerItem
            header={"Essence".toUpperCase()}
            description="Provide discounts on quality art materials for workshops, encouraging creativity with top resources."
          ></PartnerItem>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
