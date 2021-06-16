import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion';


function Skills () {
    return (
        <div className="skills" id="skills">
           <motion.h1 whileHover= {{scale:0.9}}>Skills</motion.h1>
        </div>
    )
}

export default Skills;