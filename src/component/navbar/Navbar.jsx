import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [icon, setIcon] = useState("#home");
  return (
    <nav>
      <div className="navName">
        <span>Hi, My name is</span>
        <span>Rapiii</span>
      </div>
      <div className="containerNav">
        <div className="navMenuRight">
          <a href="#home" onClick={() => setIcon("#home") } className={icon === "#home" ? "iconActive" : ""}>
            <i class="uil uil-estate iconNavbar"></i>
            <span className="textNavbar">Home</span>
          </a>
          <a href="#about" onClick={() => setIcon("#about") } className={icon === "#about" ? "iconActive" : ""}>
            <i class="uil uil-user iconNavbar"></i>
            <span className="textNavbar">About</span>
          </a>
          <a href="#work" onClick={() => setIcon("#work") } className={icon === "#work" ? "iconActive" : ""}>
            <i class="uil uil-notebooks iconNavbar"></i>
            <span className="textNavbar">Work</span>
          </a>
        </div>
        <div className="navMenuBott">
          <a href="#service" onClick={() => setIcon("#service") } className={icon === "#service" ? "iconActive" : ""}>
            <i class="uil uil-sliders-v-alt iconNavbar"></i>
            <span className="textNavbar">Service</span>
          </a>
          <a href="#footer" onClick={() => setIcon("#footer") } className={icon === "#footer" ? "iconActive" : ""}>
            <i class="uil uil-telegram-alt iconNavbar"></i>
            <span className="textNavbar">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
