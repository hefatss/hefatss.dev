import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Service.css";

const Service = () => {
  const { scrollYProgress } = useScroll();
  const frontend = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const backend = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const dkv = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section id="service">
      <div className="serviceTypo">
        <motion.span style={{ x: frontend }}>
          Frontend <span className="outlineTypo">Developer</span> - Frontend{" "}
          <span className="outlineTypo">Developer</span> - Frontend{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
        <motion.spans tyle={{ x: backend }}>
          <span className="outlineTypo">Backend</span> Developer - Backend{" "}
          <span className="outlineTypo">Developer</span> - Backend{" "}
          <span className="outlineTypo">Developer</span> - Backend {" "}
          <span className="outlineTypo">Developer</span> -
        </motion.spans>
        <motion.span style={{ x: dkv }}>
          Visual <span className="outlineTypo">Communication</span> Design -
          Visual <span className="outlineTypo">Communication</span> Design
          -Visual <span className="outlineTypo">Communication</span> Design -{" "}
        </motion.span>
      </div>
      <div className="serviceStack">
        <div className="serviceTechStack">
          <span>HTML</span>
          <span>CSS</span>
          <span>PHP</span>
          <span>Laravel</span>
          <span>ReactJS</span>
        </div>
        <div className="serviceTechStack">
          <span>Adobe Illustrator</span>
          <span>Adobe Premiere</span>
          <span>Adobe After Effect</span>
          <span>Adobe XD</span>
        </div>
      </div>
    </section>
  );
};

export default Service;
