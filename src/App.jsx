import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx';
import Particle from "./Particle";
import Footer from "./Footer.jsx";
import Tools from './Tools';



function App() {
  return (
    
    <Router>
    
      <Navbar /> 
      <Particle />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Skills />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </div>
          }
        />
         <Route path="/tools" element={<Tools />} />
         <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
