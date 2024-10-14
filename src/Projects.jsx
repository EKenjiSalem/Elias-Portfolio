import React from 'react';
import './App.css';
import LitImg from './am-lit.jpeg';
import ProjectsImg from './townstate.jpeg';
import CoderLife from './coderlife.jpg';
import ClinicCare from './clinicare.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from './FadeIn.jsx';

const Projects = () => {
  return (
    <>
     <section className="projects-main" id="projects">
       <h1 className="projects-title"> Projects </h1>

    <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="projects-wrapper"> 
      <div className="project-container">
       <img src={LitImg} className="port-img" alt="Project" />
        <div className="project-description">
          <h2 className="main-projects-title"> Ambitious Literature </h2>
          <p> A hip-hop book store built with HTML, CSS, Javascript, and Bootstrap. </p>
          <div className="projects-group-btn">
          <a href="https://ambitiouslit.com" target="_blank" rel="noopener noreferrer">
            <button className="projects-btn">View Live</button>
          </a>
          <a href="https://github.com/EKenjiSalem/Hip-HopBookStore" target="_blank" rel="noopener noreferrer">
            <button className="projects-github-btn">GitHub</button>
          </a>
          </div>
        </div>
      </div>
     </motion.div>

     <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
       className="projects-wrapper"> 
       
      <div className="project-container">
      <div className="project-description">
          <h2 className="main-projects-title"> Town State Digital </h2>
          <p> A freelance web developer agency built with HTML, CSS, and Javascript. </p>
          <div className="projects-group-btn">
          <a href="https://townstatedigital.com" target="_blank" rel="noopener noreferrer">
            <button className="projects-btn">View Live</button>
          </a>
          <a href="https://github.com/EKenjiSalem/Web-Developer-Agency" target="_blank" rel="noopener noreferrer">
            <button className="projects-github-btn">GitHub</button>
          </a>
        </div>
        </div>
       <img src={ProjectsImg} className="port-img" alt="Project" />
      </div>
     </motion.div>

     <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="projects-wrapper"> 
      <div className="project-container">
       <img src={CoderLife} className="port-img" alt="Project" />
        <div className="project-description">
          <h2 className="main-projects-title"> Coder Life  </h2>
          <p> A front-end web developer blog built with React and CSS. </p>
          <div className="projects-group-btn">
          <a href="https://golden-arithmetic-f13f4c.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className="projects-btn">View Live</button>
          </a>
          <a href="https://github.com/EKenjiSalem/web-blog" target="_blank" rel="noopener noreferrer">
            <button className="projects-github-btn">GitHub</button>
          </a>
        </div>
        </div>
      </div>
     </motion.div>

  
    <motion.div 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="projects-wrapper"> 
      <div className="project-container">
      <div className="project-description">
          <h2 className="main-projects-title"> Clinic Care </h2>
          <p> A website made for an clinic built with HTML, CSS, and JavaScript. </p>
          <div className="projects-group-btn"> 
          <a href="https://visionary-caramel-bfe535.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="projects-btn">View Live</button>
          </a>
          <a href="https://github.com/EKenjiSalem/Clinic-Office" target="_blank" rel="noopener noreferrer">
            <button className="projects-github-btn">GitHub</button>
          </a>
        </div>
        </div>
       <img src={ClinicCare} className="port-img" alt="Project" />
      </div>
     </motion.div>
    </section>
    </>
  );
};

export default Projects;

