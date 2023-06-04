import React from 'react';
import "./Work.css";
import Picture from "../../assets/work/work.jpeg";

const Work = () => {
  return (
    <section id="work">
        <div className="workDesign">
            <div className="workTypo">
                <span>Work</span>
                <span>Work</span>
                <span>Work</span>
            </div>
            <span className='workOpening'>Featured Projects</span>
        </div>
        <div className="workContainerMain">
            <div className="workMain">
                <img className='workImage' src={Picture} alt="Work" />
                <div className="workText">
                    <span className="workNumber">01.</span>
                    <div className="workTitle">
                        <span>Contoh Project 1</span>
                        <span>Tagline Project 1</span>
                    </div>
                </div>
            </div>
            <div className="workLink">
                <a className='workLinked' href="#">
                    <i class="uil uil-arrow-up-left"></i>
                    <span>Online Preview</span>
                    </a>
            </div>
        </div>
    </section>
  )
}

export default Work