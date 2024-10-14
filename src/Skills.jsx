
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCss3, faHtml5, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import TypeScript from './typescript.png';
import './App.css';


 const Skills = () => {

     return (
        <section className="skills" id="skills">
          <div className="container">
            <h1 className="skills-main-title"> Skills </h1>

              <div className="skills-list">

              <div className="skills-container" id="title-1">
                <div className='icon-wrapper'>
                <FontAwesomeIcon icon={faHtml5} className="html-img" size="7x" />
               </div>
            <h2 className="skills-html-title"> HTML 5 </h2>
          </div>

          <div class="skills-container" id="title-1">
           <div className='icon-wrapper'>
            <FontAwesomeIcon className="css-img" icon={faCss3} size="7x" />
           </div>
            <h2 className="skills-css-title"> CSS 3 </h2>
           </div>

          <div class="skills-container" id="title-1">
           <div className="icon-wrapper">
            <FontAwesomeIcon className="javascript-img" icon={faJs} size="7x" />
          </div>
           <h2 className="skills-javascript-title"> JavaScript </h2>
          </div>

          <div class="skills-container" id="title-1">
           <div className='icon-wrapper'>
             <FontAwesomeIcon className="react-img" icon={faReact} size="7x" />
          </div>
           <h2 className="skills-react-title"> React </h2>
          </div>

          <div class="skills-container" id="title-1">
           <div className='icon-wrapper'>
            <FontAwesomeIcon className="github-img" icon={faGithub} size="7x" />
          </div>
            <h2 className="skills-github-title"> GitHub </h2>
          </div>

          <div class="skills-container" id="title-1">
            <div className='icon-type-wrapper'>
            <img src={TypeScript} className="type-img" />
          </div>
          <h2 className="skills-type-title"> TypeScript </h2>
          </div>
        </div>
        
       </div>
    </section>
    )
}

export default Skills;