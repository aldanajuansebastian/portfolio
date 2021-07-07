import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion';
import Cinepelis from './img/cinepelis.png'


function Projects () {
    return (
        <div className="projects" id="projects">
           <motion.h1 whileHover= {{scale:0.9}}>Projects</motion.h1>
            <div className="projectslist">
                <div className="project">
                    <div className="imgproject"><img src={Cinepelis} alt="Logo Cinepelis" width="100%"></img></div>
                    <h3>CinePelis</h3>
                    <p>Project developed with React</p>
                </div>
                
            </div>

        </div>
    )
}

export default Projects;