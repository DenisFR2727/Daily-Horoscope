import { Link } from "react-router-dom";
import { FaThemeco } from "react-icons/fa6";
import { LiaThemeco } from "react-icons/lia";
import { useContext } from "react";
import ThemeContextHoroscope from "../context/theme/contextTheme";

import "./horoscopestyle.scss";

const CombineZodiacAndTheme = () => {
    const { toggleThemeHoroscope, toggleTheme  } = useContext(ThemeContextHoroscope);
    return (
         <div className="combine-component">
              <div className="find-horoscope">
                 <Link to="/findYourHoroscope/">
                      Your Zodiac Sign
                 </Link>
              </div>
              <div className="line-theme"></div>
              <div className="theme">
                    <p onClick={toggleThemeHoroscope}>Switch dark/light theme  
                       {toggleTheme ? <LiaThemeco className="icon-theme"/> : <FaThemeco className="icon-theme" />}
                    </p>
              </div>
         </div>
    )
}
export default CombineZodiacAndTheme;