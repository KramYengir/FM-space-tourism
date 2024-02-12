import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="primary-header">
      <div>Logo</div>
      <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li>
            <Link to="/" className="text-white uppercase letter-spacing-2">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className="text-white uppercase letter-spacing-2"
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" className="text-white uppercase letter-spacing-2">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className="text-white uppercase letter-spacing-2"
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
