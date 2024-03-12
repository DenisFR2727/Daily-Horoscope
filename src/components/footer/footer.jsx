import { useHoroscopeValues } from "../context/context";
import "./footer.scss";

const Footer = () => {
    const { hiddenFooter } = useHoroscopeValues();

    return (
        <>
          {
            hiddenFooter  && (
                <footer>
                <div className="footer-container">
                    <div className="line-footer"></div>
                    <div className="nav-footer">
                        <div>© 2024 Mason Yekta. All rights reserved.</div>
                        <div>X</div>
                    </div>
                </div>
            </footer>
            )
         }
        </> 
    )
}
export default Footer;