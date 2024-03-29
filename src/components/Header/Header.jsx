import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoIMG from "../../assets/shared/logo.svg";
import hamburgerIMG from "../../assets/shared/icon-hamburger.svg";
import hamburgerCloseIMG from "../../assets/shared/icon-close.svg";
import "./Header.css";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const path = useLocation().pathname;
  console.log("path; ", path);

  const handleClick = () => {
    setIsExpanded(false);
  };

  // const toggleAriaSelected = (event) => {
  //   const links = document.querySelectorAll(".primary-navigation a");
  //   links.forEach((link) => {
  //     link.setAttribute("aria-selected", "false");
  //   });
  //   event.currentTarget.setAttribute("aria-selected", "true");
  // };

  return (
    <header className="primary-header flex">
      <div>
        <img src={logoIMG} alt="Website logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="sr-only">Menu</span>
        <img
          src={isExpanded ? hamburgerCloseIMG : hamburgerIMG}
          alt={isExpanded ? "Hamburger Menu Button" : "Close Menu Button"}
        />
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators flex ${
            isExpanded ? "expanded" : ""
          }`}
        >
          <li>
            <Link
              aria-selected={path === "/"}
              to="/"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                handleClick();
              }}
            >
              <span aria-hidden={true}>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              aria-selected={path === "/destination"}
              to="/destination"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                handleClick();
              }}
            >
              <span aria-hidden={true}>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              aria-selected={path === "/crew"}
              to="/crew"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                handleClick();
              }}
            >
              <span aria-hidden={true}>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              aria-selected={path === "/technology"}
              to="/technology"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
              onClick={() => {
                handleClick();
              }}
            >
              <span aria-hidden={true}>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
