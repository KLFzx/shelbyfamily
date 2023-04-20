import './App.css';
// import Shelby from "./components/Shelby/Shelby";
// import Navbar from "./components/Navbar/Navbar";
// import About from "./components/About/About";
// import Pricing from "./components/Pricing/Pricing";
// import Reviews from "./components/Reviews/Reviews";
import Outro from './components/Outro/Outro';

import Home from './pages/Home/Home';
import Terms from './pages/Terms/Terms';
import Main from './pages/Main/Main';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Whisky from './pages/Whisky/Whisky';

function App() {
  const [language, setLanguage] = useState(0);

  useEffect(() => {
    if (localStorage.lang) setLanguage(localStorage.lang);
    else setLanguage(0);
    console.log(language);
  }, [language]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main lang={language}></Main>}></Route>
        <Route path='/vpn' element={<Home lang={language}></Home>}></Route>
        <Route path='/terms' element={<Terms lang={language} />}></Route>
        <Route path='/whisky' element={<Whisky lang={language} />}></Route>
      </Routes>

      <div className='back'></div>

      <Outro lang={language}></Outro>
    </div>
  );
}

export default App;
