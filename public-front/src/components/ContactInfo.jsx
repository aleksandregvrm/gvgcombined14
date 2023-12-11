import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link,NavLink} from 'react-router-dom'
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

/* contacts containing icon and header which uses conditional rendering (forContacts:true means it's meant for the contacts page, false means it's meant for the footer). it appears based on where it is located at contactsPage or footer. icon itself serves as a link on the contactsPage */

const ContactInfo = ({forContacts}) => {
  const {english} = useSelector((store)=>store.menu)
  return (
    <>
      <div className="contact">
        <div className="icon-link">
          <Link
            to="https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
          </Link>
        </div>
        <div className="contact-info">
          {!forContacts ? (
            <Link
              className="animated-contact-text"
              target="_blank"
              to="https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu"
            >
              {!english ? '0186 ლევან ალექსიძის #6' : '0186 Levan Aleksidze #6'}
            </Link>
          ) : (
            <h4>{!english ? '0186 ლევან ალექსიძის #6' : '0186 Levan Aleksidze #6'}</h4>
          )}
        </div>
      </div>
      <div className="contact">
        <div className="icon-link">
          <Link to="https://wa.me/995599000041" target="_blank">
            <FontAwesomeIcon icon={faPhone} className="icon" />
          </Link>
        </div>
        <div className="contact-info">
          {!forContacts ? (
            <Link
              className="animated-contact-text"
              target="_blank"
              to="https://wa.me/995599000041"
            >
              +995 599 00 00 41
            </Link>
          ) : (
            <h4>+995 599 00 00 41 <br /> {!english ? 'ცხელი ხაზი' : 'Hotline'} +995 591 52 55 25</h4>
            
          )}
        </div>
      </div>
        {!forContacts && 
          <div className="contact">
             <Link className="animated-contact-text">{!english ? 'ცხელი ხაზი' : 'Hotline'} +995 591 52 55 25</Link>
        </div> 
        }
      <div className="contact">
        <div className="icon-link">
          <Link to="/service">
            <FontAwesomeIcon icon={faClock} className="icon" />
          </Link>
        </div>
        <div className="contact-info">
          {!forContacts ? (
            <Link
              to="service"
              className={!forContacts && "animated-contact-text"}
            >
              <h4>
              10:00 - 18:00 {!english ? 'ყოველდღე' : 'Daily'}
              </h4>
            </Link>
          ) : (
            <h4>10:00 - 18:00 {!english ? 'ყოველდღე' : 'Daily'}</h4>
          )}
        </div>
      </div>
      <div className="contact">
        <div className="icon-link">
          <NavLink to="/contacts">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </NavLink>
        </div>
        <div className="contact-info">
          {!forContacts ? (
            <Link
              className="animated-contact-text under-text"
              target="_blank"
              to="https://wa.me/995599000041"
            >
              office@geovending.ge
            </Link>
          ) : (
            <h4 className="under-text">office@geovending.ge</h4>
          )}
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
