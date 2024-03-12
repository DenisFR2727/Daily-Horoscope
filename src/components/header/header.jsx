import { useHoroscopeValues } from "../context/context";
import Hamburger from "./hamburger/hamburger-menu";

import { Link } from "react-router-dom";
import { FaThemeco } from "react-icons/fa6";

import "./header.scss";

const Header = () => {
 
    return (
        <header>
            <div className="header-block">
            <nav> 
                   <Link to="/" className="daily-horoscope-link" >
                   <div className="daily-horoscope">
                        <div className="icon"></div>
                        <span>Daily Horoscope</span>
                    </div>
                   </Link>
                    <div className="select-zodiac select-zodiac-mobile" translate="no">
                        <Hamburger />
                        <div className="yoursign-and-theme">
                            <Link  to={"/findYourHoroscope/"}>Your Zodiac Sign</Link>
                            <div className="icon-theme-hedaer icon-mobile">
                               <FaThemeco className="icon" />
                            </div>
                        </div>
                    </div>
            </nav>
            <div className="line-header"></div>
            </div>
        </header>
    )
}
export default Header;
