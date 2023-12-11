import Wrapper from "../assets/wrappers/ContactsWrapper";
import { Link } from "react-router-dom";
import { ContactsForm, ContactInfo } from "../components";
import mapImg from "../assets/other-images/map.png";

const Contacts = () => {
  const forContacts = true;
  return (
    <Wrapper>
      <div className="contacts-information">
        <div className="contact-info-container">
          <ContactInfo forContacts={forContacts} />
        </div>
        <div className="contacts-img">
          <Link
            target="_blank"
            to="https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu"
          >
            <img srcSet={mapImg} alt="" />
          </Link>
        </div>
      </div>
      <div className="map-aligner-container">
        <ContactsForm />
      </div>
    </Wrapper>
  );
};

export default Contacts;
