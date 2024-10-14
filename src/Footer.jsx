import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
<>
 <section className="footer">
  <div className="footer-container">  
    <div className="row">  
      <div className="col-lg-1">  
          <h6 className="footer-heading ">Navigation</h6>  
          <ul className="list-unstyled footer-link mt-4">  
            <li> <a href="#home" onClick={() => scrollToSection('home')}>Home</a> </li>  
            <li> <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a> </li>  
            <li> <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a> </li>  
            <li> <a href="#education" onClick={() => scrollToSection('education')}>Education</a> </li>
            <li> <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a> </li>
          </ul>  
      </div>  

      <div className="col-lg-2">  
          <h6 className="footer-heading">Contact Info</h6>  
          <ul className="list-unstyled  footer-link mt-4">  
            <li><a href=""> 2001 Van Ness Ave. Suite 300 </a></li>  
            <li><a href=""> San Francisco, CA 94109 </a></li>  
            <li><a href="">ESalemCode@gmail.com</a></li>  
            <li><a href="">415 - 716 - 7156</a></li>  
          </ul>  
        </div>  

      <div className="col-lg-3">  
          <h6 className="footer-heading">Social Media</h6>  
          <ul className="list-unstyled footer-link mt-4">  
                 
          <div className="social-icons-footer">
              <a href="https://www.linkedin.com/in/elias-k-salem-65740831/"> <FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/EKenjiSalem"> <FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"> <FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </ul>   
      </div> 
    </div>  
  </div>  
 </section>


    </>
  );
};

export default Footer;


