import { NavLink } from "react-router-dom";
import class_navbar from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={class_navbar.nav}>
      <div className={`${class_navbar.item} ${class_navbar.news}`}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.feed}`}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.settings}`}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.music}`}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.music}`}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
