import "./../../App.css"
import class_navbar from "./Navbar.module.css"

const Navbar = () =>{
    return(
        <nav className={class_navbar.nav}>
            
            <div className={`${class_navbar.item} ${class_navbar.news}`}>
                <a>
                    News
                </a>
            </div>
            <div className={`${class_navbar.item} ${class_navbar.feed}`}>
                <a>
                    Feed
                </a>
            </div>
            <div className={class_navbar.item}>
                <a>
                    Settings
                </a>
            </div>
            <div className={class_navbar.item}>
                <a>
                    Music
                </a>
            </div>
        </nav>
    );

};

export default Navbar;

