import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--primary-white);
  /* Toggler */
  .nav-toggle {
    font-size: 1.7rem;
    color: var(--primary-black);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  /* end */
  /* Logo and Header */
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .logo {
    height: 50px;
    width: 100px;
  }
  .logo img {
    height: 100%;
    width: 100%;
  }
  /* end */
  /* Links small */
  .links a {
    color: var(--primary-black);
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
    text-transform: uppercase;
    font-weight: 600;
  }
  .links a:hover {
    background: var(--primary-Company-blue);
    color: var(--primary-white);
    padding-left: 1.5rem;
    cursor: pointer;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  /* end */
  .nav-contacts {
    display: none;
  }
  @media screen and (min-width: 990px) {
    .nav-contacts {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      background: var(--primary-black);
      padding: 0.5rem;
      color: var(--primary-white);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    /* Adress and info */
    .nav-adress {
      display: flex;
      justify-content: space-around;
      width: 700px;
    }
    .nav-adress a:hover {
      color: yellow;
    }
    /* end */
    /* Social icons and faq*/
    .nav-icons {
      width: 160px;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .faq{
      display: flex;
      align-items: flex-start;
      height: 1.5rem;
      width: 50px;
    }
    .faq p {
      font-size: 0.9rem;
      font-weight: 900;
      &:hover{
        color: yellow;
        transition: var(--transition);
      }
    }
    .social-icon {
      font-size: 1.25rem;
      &:hover {
        cursor: pointer;
        color: yellow;
        transition: var(--transition);
      }
    }

    /* end */
    /* Language */
    .language{ 
      display: flex;
      cursor: pointer;
    }
    .language-text{
      color: var(--primary-white);
    }
    .active-language{
      color: var(--primary-Company-red);
    }
    /* Language end */
    /* Search bar */
    .search-bar {
      overflow: visible;
      height: 3rem;
      display: flex;
      padding-left: 2rem;
      justify-content: center;
      height: 2rem;
      max-width: 25%;
      /* border: 2px solid red; */
    }
    .search-bar button {
      margin-left: 1rem;
      font-size: 1rem;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--primary-white);
      transition: var(--transition);
    }
    .search-bar button:hover {
      color: var(--clr-primary-9);
      scale: 1.2;
      font-family: inherit;
    }
    .search-bar input {
      border: none;
      border-radius: 9px;
      height: 90%;
      width: 70%;
      font-size: 1.2rem;
      font-weight: 300;
      padding-left: 0.5rem;
    }
    /* end */
    /* logo and header */
    .logo {
      height: 100px;
      width: 240px;
    }
    .nav-center {
      max-width: 1700px;
      width: 95%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .nav-header {
      width: 30%;
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    /* end */
    /* Links */
    .links-container {
      height: auto !important;
      overflow: visible;
      width: 70%;
    }
    .links {
      display: flex;
      justify-content: space-evenly;
    }
    .links li {
      font-size: 0.9rem;
      color: var(--primary-Company-red);
    }
    .links a {
      font-size: 1.05rem;
      padding: 0;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: var(--primary-Company-red);
    }
    /* end */
    /* Submenu */
    .submenu {
      height: 0px;
      width: 100px;
      overflow: hidden;
      position: absolute;
      left: 1024px;
      background: var(--primary-black);
      color: var(--primary-white);
      text-transform: capitalize;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      z-index: -1;
      font-size: 1.1rem;
    }
    .submenu a {
      cursor: pointer;
      padding-left: 0.2rem;
    }
    .submenu a:hover {
      background: var(--primary-white);
      color: var(--primary-black);
    }
    .open-submenu {
      height: auto;
      padding: 0.5rem;
      z-index: 10;
    }
    /* end */
  }
  @media screen and (min-width: 1230px) {
    .links a {
      font-size: 1.22rem;
    }
    .links-container {
      width: 60%;
    }
    .links{
      justify-content: space-around;
    }
  }
`;

export default Wrapper;
