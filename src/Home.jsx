import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Portfolio from './Portfolio.jpg';
import { motion } from 'framer-motion';

const Home = () => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delay, setDelay] = useState(150);

    const phrases = [
        "Web Developer",
        "Web Designer",
        "UI Designer",
    ];

    useEffect(() => {
        const handleTyping = () => {
            const phrase = phrases[loopNum % phrases.length];
            const updatedText = isDeleting 
                ? phrase.substring(0, currentText.length - 1)
                : phrase.substring(0, currentText.length + 1);

            setCurrentText(updatedText);

            if (!isDeleting && updatedText === phrase) {
                setIsDeleting(true);
                setDelay(1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
                setDelay(150); 
            } else {
                setDelay(isDeleting ? 50 : 150); 
            }
        };

        const typingTimeout = setTimeout(handleTyping, delay);

        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, loopNum, delay, phrases]);

    return (
        <section className="home" id="home"> 
            <motion.div 
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }} 
              className="home-content">
                <h1> Hello, I'm <span className="main-span">Elias</span></h1>
                <h3 className="text-animation"> I'm a <span> {currentText} </span></h3>
                <p className="main-content"> 
                Front-End Web Developer with 4+ years of building production level websites and web applications. 
                Experienced in creating responsive, dynamic, and visually appealing web applications. Experienced in <strong> HTML, CSS, JavaScript,
                React, Bootstrap, and Typescript </strong> languages. Knowledgeable of AI systems, UI/UX best practices, testing, and version control. 
                Experienced in converting prototypes via figma into interactive, user-friendly interfaces. I'm also passionate about writing clean code,
                and keeping up with the latest industry trends including: AI (Chat GPT and Gemini), GSAP, Three.js, and Framer Motion.
                </p>
            
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/elias-k-salem-65740831/"> <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/EKenjiSalem"> <FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"> <FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a>
                </div>

                <div className="btn-group">
                    <a href="https://docs.google.com/document/d/17obHV4yU_Hkw0-aQnP6OJZnay6MtgQCZ/edit?usp=sharing&ouid=109494902032777235866&rtpof=true&sd=true" target="_blank" className="btn"> Resume </a>
                    <a href="mailto:example@gmail.com?subject=Subject%20Here&body=Body%20Here" target="_blank"  className="email">
                     ESalemCode@gmail.com
                    </a>
                </div>
            </motion.div>
    
            <motion.div 
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }} 
              className="home-img">
                <img src={Portfolio} alt="Portfolio" className="main-img" />
            </motion.div>
        </section>
    );
};

export default Home;
