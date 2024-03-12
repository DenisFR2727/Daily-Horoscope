import { Link } from "react-router-dom";
import "../header.scss";
import { useHoroscopeValues } from "../../context/context";
import { ImCross } from "react-icons/im";
import ThemeContextHoroscope from "../../context/theme/contextTheme";
import { useContext } from "react";

const Hamburger = () => {
    const { activeMenu, setActiveMenu } = useHoroscopeValues();
    const { hiddenFooter, setHiddenFooter } = useHoroscopeValues();
    const { theme } = useContext(ThemeContextHoroscope);
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
        setHiddenFooter(!hiddenFooter);
    }
    return (
        <div className="hamburger-toggle" 
             onClick={toggleMenu}
             >
             {activeMenu ?
                <Link to="/combineZodiacAndTheme" >
                    <div className="burger-menu" style={theme}>
                            <div></div>
                            <div></div>
                            <div></div>
                    </div>
                </Link>
               : ( 
                <Link to="/" >
                    <div className="cancel-menu" onClick={toggleMenu} style={theme}>
                         <ImCross />
                    </div> 
                </Link>
               )
             }
        </div>
    )
}
export default Hamburger;