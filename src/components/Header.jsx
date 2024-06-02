import "./../App.css"
import logotype from "./../1614604873_40-p-avatarki-na-belom-fone-49.png";
import class_header from "./Header.module.css"

console.log(class_header);

const Header = () =>{
    return(
        <header className={class_header.header}>
            <div className={class_header.logo}>
                <img src={logotype}></img>
            </div>
            <div>

            </div>
        </header>
    );

};

export default Header;

