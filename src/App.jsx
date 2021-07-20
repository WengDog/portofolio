import About from "components/about/About";
import Home from "components/home/Home";
import Menu from "components/menu/Menu";
import Navbar from "components/navbar/Navbar";
import Projects from "components/projects/Projects";
import { useState } from "react";
import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <About/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
