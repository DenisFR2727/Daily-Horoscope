import CombineZodiacAndTheme from "../horoscopes/combineZodiacAndTheme";
import CurrentHoroscope from "../horoscopes/current-horoscope";
import FindYourHoroscope from "../horoscopes/find-horoscope";
import HoroscopeAll from "../horoscopes/horoscope-all";
import "./main.scss";

const Main = (props) => {

    const selected = props.selectedPage;
  
    let componentToDisplay;
  
    switch(selected){
        case "HoroscopeAll" :
          componentToDisplay = <HoroscopeAll />
        break;
        case "CurrentHoroscope":
          componentToDisplay = <CurrentHoroscope />
        break;
        case "FindYourHoroscope":
          componentToDisplay = <FindYourHoroscope />
        break;
        case "CombineZodiacAndTheme":
          componentToDisplay = <CombineZodiacAndTheme />
        break;
          
        default:
          componentToDisplay = null;
    }
    return (
        <div className="main-container">
                {componentToDisplay}
        </div>
    )
}
export default Main;