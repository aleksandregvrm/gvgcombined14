import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import DynamicNavLink from "./DynamicNavLink";
import Submenu from "./Submenu";
import Search from "./Search";
import LanguageChange from "./LanguageChange";
import Wrapper from "../assets/wrappers/NavbarWrapper";
import gvgLogo from "../assets/images/gvglogo.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaBars,
  FaLinkedin,
} from "react-icons/fa";
import { toggleNavbar } from "../features/menu/menuSlice";
import { links } from "../utils";

/* Navbar which on the smaller(mobile) screen acts as all other websites using toggle icon and page links being aligned vertically, on the bigger screen size links are displayed horizontally and nav-contacts div is added for additional information. every dynamic element is handled in the featured/menu folder menu.jsx(redux) file */

const Navbar = () => {
  const { isNavbarOpen,english } = useSelector((store) => store.menu);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    dispatch(toggleNavbar());
  };
  // this useEffect determines the height of the collapsable link on the smaller screen based on the links amount
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isNavbarOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isNavbarOpen]);
  return (
    <Wrapper>
      <div className="nav-center">
        {/* Header for the small screen */}
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
          <div className="logo">
            <img srcSet={gvgLogo} alt="" />
          </div>
        </div>
        {/* Header for the small screen end */}
        {/* collapsable NavLinks on the smallscreen and DynamicLink and submenu on the bigger screen size */}
        <div
          ref={linksContainerRef}
          className={
            isNavbarOpen ? "links-container show-container" : "links-container"
          }
        >
          <ul className="links" ref={linksRef}>
            {links.map((item) => {
              const { id, url, text, textGe, hoverTrigger } = item;
              if (!hoverTrigger) {
                return (
                  <li>
                    <NavLink key={id} to={url}>
                      {!english ? textGe : text}
                    </NavLink>
                  </li>
                );
              } else {
                // Dynamic NavLink is a link under witch submenu pops up
                return (
                  <li>
                    <DynamicNavLink
                      key={id}
                      url={url}
                      text={!english ? textGe : text}
                    ></DynamicNavLink>
                  </li>
                );
              }
            })}
            {user && (
              <li>
                <NavLink to="admin">Admin</NavLink>
              </li>
            )}
          </ul>
          <Submenu />
        </div>
        {/* Dynamic links and submenu end */}
      </div>
      {/* Nav Contacts for the bigger screen */}
      <div className="nav-contacts">
        <div className="nav-adress">
          <span>
            <Link
              to="https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu"
              target="_blank"
            >
              {!english ? "0186 ლევან ალექსიძის #6" : "0186 Levan Aleksidze #6"}
            </Link>
          </span>
          <span className="number">
            <Link target="_blank" to="https://wa.me/995599000041">
              + 995 599 00 00 41
            </Link>
          </span>
          <span>
            <NavLink to="contacts">Office@geovending.ge</NavLink>
          </span>
        </div>
        <Search />
        <div className="faq">
          <span>
            <NavLink to="/faq">
              <p>FAQ</p>
              {/* <FaLinkedin className="social-icon" /> */}
            </NavLink>
          </span>
        </div>
        <div className="nav-icons">
          <LanguageChange />
          <span>
            <Link target="_blank" to="https://www.facebook.com/geovending">
              <FaFacebook className="social-icon" />
            </Link>
          </span>
          <span>
            <Link
              target="_blank"
              to="https://www.instagram.com/georgianvendinggroup/"
            >
              <FaInstagram className="social-icon" />
            </Link>
          </span>
          <span>
            <Link
              target="_blank"
              to="https://ge.linkedin.com/in/georgian-vending-group-9a3126291"
            >
              <FaLinkedin className="social-icon" />
            </Link>
          </span>
        </div>
      </div>
      {/* Nav Contacts for the bigger screen end */}
    </Wrapper>
  );
};
export default Navbar;
