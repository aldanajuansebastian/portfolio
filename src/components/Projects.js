import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion';
import CinePelis from './img/cinepelis.png';
import Venuspizza from './img/venuspizza.png';
import { Link } from "react-router-dom";
import {Link as LinkSmooth} from 'react-scroll';
import White from './img/white.png';



function Projects () {
    return (
        <div>
            <img className="white" src={White} width="100%" alt="fondo blanco"></img>
            <div className="projects"  id="projects" >
            <motion.h1 whileHover= {{scale:0.9}}>Projects</motion.h1>
            <br></br>
                <div className="introduction">
                    <p>The following projects are only web development ones. 
                    If you are looking for Marketing portfolio, please <span><LinkSmooth to="contact" className="contactme" smooth={true} duration={1000}>contact me.</LinkSmooth></span></p>
                    <br></br>
                    <p>It hasn't been long since I started learning to code. I still don't have my
                    first job experience in this field.
                    However, I have worked on the following personal projects 
                    to show you what I can do. In my academic experience I have worked in teams and I have developed 
                    soft skills such as teamwork, adaptation to change, efficiency and a collaborative spirit. 
                    I have worked with the SCRUM methodology. However, the following projects were developed only for by me.</p>
                </div>
                
                
                <div className="projectslist">
                    
                    <Link to="/cinepelis" className="project" style={{ textDecoration: 'none' }}>
                        <div className="imgproject"><img src={CinePelis} alt="Cinepelis" width="100%"></img></div>
                        <h3>CinePelis</h3>
                        <p>Project developed with React</p>
                    </Link>
                    <Link to="/venuspizza" className="project" style={{ textDecoration: 'none' }}>
                        <div className="imgproject"><img src={Venuspizza} alt="VenusPizza" width="100%"></img></div>
                        <h3>Venus Pizza</h3>
                        <p>Project developed with React</p> 
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;