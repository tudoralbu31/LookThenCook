import "./NavBar.css";
import { NavButton } from "../Buttons/NavButton/NavButton";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="title">
        <h1>Look then cook</h1>
      </div>
      <div className="button-wrapper">
        <div>
          <Link to="/">
            <NavButton text="Home" />
          </Link>
        </div>
        <div>
          <Link to="/search">
            <NavButton text="Search" />
          </Link>
        </div>
        <div>
          <Link to="/account">
            <NavButton text="Account" />
          </Link>
        </div>
      </div>
      <div className="burger-menu">
        <div className="burger-element"></div>
        <div className="burger-element"></div>
        <div className="burger-element"></div>
      </div>
    </div>
  );
};
