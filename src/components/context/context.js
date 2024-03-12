import { createContext, 
         useContext,
         useEffect,
         useState } from "react";

import Horoscope from "../data/data";

const HoroscopeContext = createContext();

export const StateProvider = ({children}) => {
       const [horoscopes, setHoroscopes] = useState([]);
       const [activeMenu, setActiveMenu] = useState(true);
       const [hiddenFooter, setHiddenFooter] = useState(true);
       const [toggleTheme, setToggleTheme] = useState(false);

       useEffect(() => {
          setHoroscopes(Horoscope);
  
       },[]);
       return (
         <HoroscopeContext.Provider value={{
         horoscopes, 
         hiddenFooter, 
         setHiddenFooter,
         activeMenu, 
         setActiveMenu,
         toggleTheme, 
         setToggleTheme}}>
                            {children}
         </HoroscopeContext.Provider>
       )
}
export const useHoroscopeValues = () => {
    return useContext(HoroscopeContext);
};