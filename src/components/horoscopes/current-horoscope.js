import { useParams } from "react-router-dom";
import { useHoroscopeValues } from "../context/context";
import { useContext } from "react";
import "./horoscopestyle.scss";
import ThemeContextHoroscope from "../context/theme/contextTheme";

const CurrentHoroscope = () => {
    const { id } = useParams();
    const { horoscopes } = useHoroscopeValues();
    const { theme } = useContext(ThemeContextHoroscope);
    const currentZodiac = (horoscopes) => {
        return horoscopes.filter((zodiac) => (
               zodiac.id === Number(id)
        ))
    };
const current = currentZodiac(horoscopes);

    return (
        <div className="current-zodiac" style={theme}>
            {current.map((zodiac) => (
                <div key={zodiac.id} 
                     className="block-current-zodiac" style={theme}>
                     <h1>{zodiac.name}</h1>
                     <h2>{zodiac.date}</h2>
                     <p>{zodiac.title}</p>
                </div>
            ))}
        </div>
    )
}
export default CurrentHoroscope;