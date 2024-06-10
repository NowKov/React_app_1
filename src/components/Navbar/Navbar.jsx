import class_navbar from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={class_navbar.nav}>
      <div className={`${class_navbar.item} ${class_navbar.news}`}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.feed}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.settings}`}>
        <a href="/news">News</a>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.music}`}>
        <a href="/music">Music</a>
      </div>
      <div className={`${class_navbar.item} ${class_navbar.music}`}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
