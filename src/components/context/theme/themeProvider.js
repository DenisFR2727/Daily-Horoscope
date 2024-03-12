import { useState } from "react";
import ThemeContextHoroscope from "./contextTheme"

const ThemeProvider = ({children}) => {
    const [toggleTheme, setToggleTheme] = useState(false);

    const [theme, setTheme] = useState({
        backgroundColor: '#fff',
        color: 'black'
    });

   const toggleThemeHoroscope = () => {
    const newTheme =
          theme.backgroundColor === '#fff'
                ? { backgroundColor: '#5e636e', color: '#fff' }
                : { backgroundColor: '#fff', color: 'black' };
          setTheme(newTheme);
          setToggleTheme(!toggleTheme);
   }

    return (
         <ThemeContextHoroscope.Provider value={
            {theme, 
             toggleThemeHoroscope, 
             toggleTheme
            }}>
            {children}
         </ThemeContextHoroscope.Provider>
    )
}
export default ThemeProvider;