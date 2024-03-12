import { Link } from "react-router-dom";

import "./horoscopestyle.scss";
import CurrentDay from "./current-day";
import { useHoroscopeValues } from "../context/context";

const HoroscopeAll = () => {
    const { horoscopes } = useHoroscopeValues();

    return (
        <div className="horoscope-list">
            <CurrentDay />
            <ul>
                {horoscopes.map((horoscope) => {
                    return <Link to={"/currentHoroscope/" + horoscope.id} 
                                 key={horoscope.id}
                                 className="link-underline">
                                <li  className="block-horoscope">
                                        <img src={horoscope.image} 
                                            alt=""/>
                                        <h2>{horoscope.name}</h2>
                                        <p className="date">
                                            {horoscope.date}
                                        </p>
                                </li>
                           </Link> 
                })}
            </ul>
        </div>
    );
};
export default HoroscopeAll;