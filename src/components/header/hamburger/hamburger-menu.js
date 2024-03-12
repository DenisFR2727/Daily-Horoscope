import { Link } from "react-router-dom";
import "../header.scss";
import { useHoroscopeValues } from "../../context/context";

const Hamburger = () => {
    const { activeMenu, setActiveMenu } = useHoroscopeValues();
    const { hiddenFooter, setHiddenFooter } = useHoroscopeValues();

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
        setHiddenFooter(!hiddenFooter);
    }
    return (
        <div className="hamburger-toggle" onClick={toggleMenu}>
             {activeMenu ?
                <Link to="/combineZodiacAndTheme">
                    <div className="burger-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                    </div>
                </Link>
               : ( 
                <Link to="/">
                    <div className="cancel-menu" onClick={toggleMenu}>
                        X
                    </div> 
                </Link>
               )
             }
        </div>
    )
}
export default Hamburger;