import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion';
import CinePelis from './img/cinepelis.png';
import Venuspizza from './img/venuspizza.png';
import { Link } from "react-router-dom";



function Projects () {
    return (
        <div className="projects" id="projects">
           <motion.h1 whileHover= {{scale:0.9}}>Projects</motion.h1>
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
    )
}

export default Projects;