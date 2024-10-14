import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <>
    <section className="education" id="education"> 
     <h1 className="education-title"> Education </h1>
     <div className="timeline-main">
      <motion.div
          initial={{ x: -100, opacity: 0}}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}

         className="timeline-list">
          <div className="timeline-dot">  </div>
            <div className="timeline-date"> January - September: 2024 </div>
             <div className="timeline-data">
              <h3 className="scrimba-title"> Scrimba </h3>
              <h4 className="career-path"> Front-End Career Path Certificate</h4>
              <p className="scrimba-data"> Studied and applied HTML 5, CSS, JavaScript, and React techniques and best practices to build webpages, applications, and features. </p>
              <div className="scrim-link">
               <a href="https://docs.google.com/document/d/17obHV4yU_Hkw0-aQnP6OJZnay6MtgQCZ/edit?usp=sharing&ouid=109494902032777235866&rtpof=true&sd=true" target="_blank" className="external-link">
                Read More in Resume
               </a>
              </div>
                <a href='https://drive.google.com/file/d/1ganL0OiMrklmF35w8zatviEoAXM3EhY4/view?usp=drive_link'>
                 <button className="btn-scrimba"> View Certificate </button>
               </a>
            </div>
        </motion.div>

        <motion.div 
            initial={{ x: 100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="timeline-list">
          <div className="timeline-dot"> </div>
            <div className="timeline-date"> Feburary - August: 2023 </div>
             <div className="timeline-data">
              <h3 className="coursera-title"> Coursera </h3>
              <h4 className="meta-coursera"> Meta Front-End Web Developer Certificate </h4>
              <p className="meta-coursera-data"> Studied essentially the same content as Scrimba's Front-End Career Path certificate. Including: Unit Testing and Version Control. </p>
              <div className="scrim-link">
               <a href="https://docs.google.com/document/d/17obHV4yU_Hkw0-aQnP6OJZnay6MtgQCZ/edit?usp=sharing&ouid=109494902032777235866&rtpof=true&sd=true" target="_blank" className="external-link">
                Read More in Resume
               </a>
              </div>
              <a href="https://drive.google.com/file/d/1b7D3dwQ7vcTK7c4nsL6nVv3qAQkEaBdp/view?usp=drive_link">
              <button className="coursera-btn"> View Certificate </button>
              </a>
            </div>
        </motion.div>

        <motion.div
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="timeline-list">
          <div className="timeline-dot"> </div>
            <div className="timeline-date"> 2022 </div>
             <div className="timeline-data">
              <h3 className="project-builds-title"> Built over 20+ production level web development projects </h3>
              <p className="project-builds-data"> Please refer to the projects and Github section </p>
              <div className="scrim-link-builds">
               <a href="https://github.com/EKenjiSalem" target="_blank" className="external-link">
                View Github
               </a>
              </div>
              <Link to="/Projects" target='_blank' >
              <button className="btn-projects-builds" target="_blank"> View Projects</button>
              </Link>
            </div>
        </motion.div>

        <motion.div
            initial={{ x: 100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }} 
           className="timeline-list">
           <div className="timeline-dot"> </div>
            <div className="timeline-date"> March - September: 2021 </div>
             <div className="timeline-data">
              <h3 className="treehouse-title"> Team Treehouse </h3>
              <p className='treehouse-data'> Studied multiple tracks including: Fullstack web development, Front-End web development, UI/UX research and Implementation.</p>
              <Link to="/tools">
              <button className="treehouse-btn"> View Certificates </button>
              </Link>
            </div>
        </motion.div>

        <motion.div
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="timeline-list">
          <div className="timeline-dot"> </div>
            <div className="timeline-date"> 2019 - 2020 </div>
             <div className="timeline-data">
              <h3 className="udemy-title"> Udemy </h3>
              <p className="udemy-certificate"> Completed multiple certificate of completions: 
              <br />
              <br />
              <span class="udemy-classes">
              Colt Steele - The Web Developer Bootcamp
              <br />
              <br />
              Brad Traversry - Modern JavaScript
              <br />
              <br />
              John Smilga - Bootstrap 4 from Scratch
              </span>
              </p>
              <Link to="/tools">
              <button className="btn-udemy"> View Certificates </button>
              </Link>
            </div>
        </motion.div>

        <motion.div
            initial={{ x: 100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }} 
           className="timeline-list">
           <div className="timeline-dot"> </div>
            <div className="timeline-date"> July - June </div>
             <div className="timeline-data">
              <h3 className="calstate-title"> California State University, East Bay </h3>
              <h4 class="ba-title"> Bachelor of Arts Degree: English Creative Writing Emphasis </h4>
              <a href="https://docs.google.com/document/d/17obHV4yU_Hkw0-aQnP6OJZnay6MtgQCZ/edit?usp=sharing&ouid=109494902032777235866&rtpof=true&sd=true" target="_blank" className="external-link">
              <button className="calstate-btn"> View Degree </button>
               </a>
             
            </div>
        </motion.div>

        <motion.div
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
            delay: 0.2,
            x: {type: "spring", stiffness: 60},
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="timeline-list">
          <div className="timeline-dot"> </div>
            <div className="timeline-date"> August - June </div>
             <div className="timeline-data">
              <h3 className="alameda-title"> College of Alameda </h3>
              <h4 className="associates-title"> Associate of Arts Degree: Social Sciences </h4>
              <Link to="/tools">
              <button className="btn-alameda"> View Degree </button>
              </Link>       
            </div>
        </motion.div>
     </div>    
    </section>
    </>

  );
};

export default Education;