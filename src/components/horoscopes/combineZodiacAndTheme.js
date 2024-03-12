import { Link } from "react-router-dom";
import { FaThemeco } from "react-icons/fa6";

import "./horoscopestyle.scss";

const CombineZodiacAndTheme = () => {

    return (
         <div className="combine-component">
              <div className="find-horoscope">
                 <Link to="/findYourHoroscope/">
                      Your Zodiac Sign
                 </Link>
              </div>
              <div className="line-theme"></div>
              <div className="theme">
                    <p>Switch dark/light theme  
                            <FaThemeco className="icon-theme" />
                    </p>
              </div>
         </div>
    )
}
export default CombineZodiacAndTheme;