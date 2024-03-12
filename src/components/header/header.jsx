import Hamburger from "./hamburger/hamburger-menu";

import { Link } from "react-router-dom";
import { FaThemeco } from "react-icons/fa6";
import { LiaThemeco } from "react-icons/lia";

import { useContext } from "react";
import ThemeContextHoroscope from "../context/theme/contextTheme";

import "./header.scss";

const Header = () => {
    const { theme } = useContext(ThemeContextHoroscope);
    const { toggleThemeHoroscope, toggleTheme  } = useContext(ThemeContextHoroscope);

    return (
        <header >
            <div className="header-block" >
            <nav> 
                   <Link to="/" className="daily-horoscope-link" >
                   <div className="daily-horoscope" style={theme}>
                        <div className="icon"></div>
                        <span>Daily Horoscope</span>
                    </div>
                   </Link>
                    <div className="select-zodiac select-zodiac-mobile" translate="no">
                        <Hamburger />
                        <div className="yoursign-and-theme">
                            <Link  to={"/findYourHoroscope/"} style={theme}>Your Zodiac Sign</Link>
                            <div className="icon-theme-hedaer icon-mobile" onClick={toggleThemeHoroscope}>
                             {toggleTheme ? <LiaThemeco className="icon"/> : <FaThemeco className="icon" />}
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
