import './App.css';
import Shelby from './components/Shelby/Shelby';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Outro from './components/Outro/Outro';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <div className="back"></div>
      <Navbar></Navbar>
      <Shelby></Shelby>
      <About></About>
      <Pricing></Pricing>
      <Reviews></Reviews>
      <Outro></Outro>
    </div>
  );
}

export default App;
