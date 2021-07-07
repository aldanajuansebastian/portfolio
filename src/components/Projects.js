import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion';


function Projects () {
    return (
        <div className="projects" id="projects">
           <motion.h1 whileHover= {{scale:0.9}}>Projects</motion.h1>


        </div>
    )
}

export default Projects;