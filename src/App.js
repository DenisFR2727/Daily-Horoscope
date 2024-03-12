import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './components/context/context';
import ThemeProvider from './components/context/theme/themeProvider';

import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import './App.css';
import { useContext } from 'react';
import ThemeContextHoroscope from './components/context/theme/contextTheme';

function App() {
  const { theme } = useContext(ThemeContextHoroscope);

  return (
    <BrowserRouter>
      <StateProvider>
                <div className="App" style={theme}>
                      <Header />
                      <Routes>
                          <Route path="/" element={<Main selectedPage="HoroscopeAll"/>}/>
                          <Route path="/currentHoroscope/:id" element={<Main selectedPage="CurrentHoroscope"/>}/>
                          <Route path="/findYourHoroscope" element={<Main selectedPage="FindYourHoroscope"/>}/>
                          <Route path='/combineZodiacAndTheme' element={<Main selectedPage="CombineZodiacAndTheme"/>}></Route>
                      </Routes>
                      <Footer />
                </div>
      </StateProvider>
    </BrowserRouter>
   
  );
}
function AppTheme() {
  return (
     <ThemeProvider>
              <App />
     </ThemeProvider>
  )
}
export default AppTheme;
