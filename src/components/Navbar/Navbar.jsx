import { Link, NavLink } from "react-router-dom";
// import class_navbar from "./Navbar.module.css";
import class_navbar from "./Navbar1.module.css";
// import "./Navbar.css";
const setActive = ({ isActive }) =>
  isActive ? class_navbar.activeLink : class_navbar.disactiveLink;

const Navbar = () => {
  return (
    <nav className={class_navbar.nav}>
      <div className={class_navbar.item}>
        <NavLink to="/dialogs" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div className={class_navbar.item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div className={class_navbar.item}>
        <NavLink to="/news" className={setActive}>
          News
        </NavLink>
      </div>
      <div className={class_navbar.item}>
        <NavLink to="/music" className={setActive}>
          Music
        </NavLink>
      </div>
      <div className={class_navbar.item}>
        <NavLink to="/settings" className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
