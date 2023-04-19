import "./App.css";
import Shelby from "./components/Shelby/Shelby";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Outro from "./components/Outro/Outro";
import Reviews from "./components/Reviews/Reviews";

import Home from "./pages/Home/Home";
import Terms from "./pages/Terms/Terms";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";

function App() {
  let component;
  const [language, setLanguage] = useState(0);

  switch (window.location.pathname) {
    case "/":
      component = <Main lang={language}></Main>;
      break;
    case "/terms":
      component = <Terms lang={language} />;
      break;
    case "/vpn":
      component = <Home lang={language} />;
      break;
  }

  useEffect(() => {
    if (localStorage.lang) setLanguage(localStorage.lang);
    else setLanguage(0);
    console.log(language);
  }, []);

  return (
    <div className="App">
      <div className="back"></div>

      {component}
      <Outro lang={language}></Outro>
    </div>
  );
}

export default App;
