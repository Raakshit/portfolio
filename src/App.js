
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Design from './Components/Design';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
            {/* <SocialLink/> */}
      <Design/>
    </div>
  );
}

export default App;
