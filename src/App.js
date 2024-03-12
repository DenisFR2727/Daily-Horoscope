import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './components/context/context';

import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <StateProvider>
              <div className="App">
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
export default App;
