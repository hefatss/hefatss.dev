import React from "react";
import Picture from "../../assets/1.jpeg";
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerText">
        <img src={Picture} alt="Profile" />
        <span>Come Join US!</span>
      </div>
      <div className="footerLink">
        <a href="">Email</a>
        <a href="">Phone Number</a>
        <Link to="/more-information">More Information</Link>
      </div>
      <div className="footerSosmed">
        <a href="https://www.instagram.com/hefatss">
          <i class="uil uil-instagram"></i>
        </a>
        <a href="https://open.spotify.com/user/31zbeauooa5hfxaddn64uykthede?si=f09317dba69942a3">
          <i class="uil uil-music"></i>
        </a>
        <a href="https://github.com/fvckdilrise">
          <i class="uil uil-github"></i>
        </a>
        <a href="">
          <i class="uil uil-discord"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
