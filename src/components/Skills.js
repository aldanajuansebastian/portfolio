import React from 'react';
import './Skills.css';
import {motion} from 'framer-motion';
import orange from './img/orange.png';


function Skills () {
    return (
        <div className="skills" id="skills">
                <img className="orange" src={orange} width="100%"></img>
                <div className="con">
                    <motion.h1 whileHover= {{scale:0.9}}>Skills</motion.h1>
                </div>
        </div>
    )
}

export default Skills;