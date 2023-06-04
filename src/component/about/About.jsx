import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="aboutTypo">
        <span className="aboutTypoText">ABOUT ME</span>
        <span className="aboutTypoText">ABOUT ME</span>
        <span className="aboutTypoText">ABOUT ME</span>
      </div>
      <div className="aboutContent">
        <h1 className='aboutInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, architecto.</h1>
        <a className='aboutButton' href="#">
          Read More About Me <i class="uil uil-arrow-up-right"></i>
          </a>
      </div>
    </section>
  )
}

export default About