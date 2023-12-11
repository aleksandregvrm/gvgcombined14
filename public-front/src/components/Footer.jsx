import Wrapper from "../assets/wrappers/FooterWrapper";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AssociatedCompanies from "./AssociatedCompanies";
import { whiteCompanies } from "../utils";
import {useSelector,useDispatch} from 'react-redux';
import footerIMG from "../assets/other-images/gvg-footer-logo.png";
import ContactInfo from "./ContactInfo";
import SubscribeEmail from "./SubscribeEmail";
import { links } from "../utils";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { additionalLinks } from "../utils";
import { logoutUser } from "../features/user/userSlice";

/* additional links are the links not applied in the utils folder it is an additional way to navigate to a specific page, we use the footer to login to the admin page as the icon is located here */

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((store)=>store.user);
  const {english} = useSelector((store)=>store.menu);
  const currentYear = new Date().getFullYear();
  const forContacts = false;
  const logoutHandler = () => {
     dispatch(logoutUser());
     navigate("/");
  }
  return (
    <Wrapper>
      <div className="footer-container">
        {/* Social media Icons */}
        <div className="contacts-container">
          <ContactInfo forContacts={forContacts} />
          <div className="logos-container">
            <div className="logo">
              <Link
                to="https://www.facebook.com/geovending"
                className="logo-icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
            <div className="logo">
              <Link
                to="https://www.instagram.com/georgianvendinggroup/"
                className="logo-icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
            <div className="logo">
              <Link
                to="https://ge.linkedin.com/in/georgian-vending-group-9a3126291"
                className="logo-icon"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
            <div className="logo authorization">
              {user ? (
                <NavLink className="logo-icon" onClick={logoutHandler}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </NavLink>
              ) : (
                <NavLink to="/login" className="logo-icon">
                  <FontAwesomeIcon icon={faRightToBracket} />
                </NavLink>
              )}
            </div>
          </div>
        </div>
        {/* Social media icons end */}
        {/* Pages */}
        <div className="pages-container">
          <ul>
            {links.map((link) => {
              return (
                <NavLink to={link.url} key={link.id}>
                  {!english ? link.textGe : link.text}
                </NavLink>
              );
            })}
            {additionalLinks.map((link, index) => {
              return (
                <NavLink key={index} to={link.to}>
                  {!english ? link.textGe : link.text}
                </NavLink>
              );
            })}
          </ul>
        </div>
        {/* Pages end */}
        {/* subscribe */}
        <SubscribeEmail />
        {/* Subscribe end */}
        <div className="big-underline"></div>
        {/* Copyright and footer img */}
        <div className="copy-text-logo">
          <div className="footer-img">
            <img srcSet={footerIMG} alt="" />
          </div>
          <div className="footer-copy-text">
            <h4>&copy; {currentYear} Georgian Vending Group</h4>
          </div>
        </div>
        {/* Copyright and footer img end*/}
        {/* Responsive Associated companies */}
        <AssociatedCompanies images={whiteCompanies} />
        {/* Responsive Associated companies end */}
      </div>
    </Wrapper>
  );
};
export default Footer;
