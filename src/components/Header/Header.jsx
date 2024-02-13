import { Link } from "react-router-dom";
import logoIMG from "../../assets/shared/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="primary-header flex">
      <div>
        <img src={logoIMG} alt="Website logo" />
      </div>
      <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li>
            <Link
              to="/"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
            >
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
            >
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className="ff-sans-cond text-white uppercase letter-spacing-2"
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
