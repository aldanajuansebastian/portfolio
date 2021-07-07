import React from 'react';
import './Skills.css';
import {motion} from 'framer-motion';
import orange from './img/orange.png';
import LogoReact from './img/logoreact.png';
import HtmlCssJs from './img/htmlcssjs.png';
import Adobe from './img/adobe.png';



function Skills () {
    return (
        <div>
            <img className="orange" src={orange} width="100%" alt="fondo naranja"></img>
            <div className="skills" id="skills">
                    
                    <div className="con">
                        <motion.h1 whileHover= {{scale:0.9}}>My Skills</motion.h1>
                        <div className="skillslist">
                            <div className="skill">
                                <div className="imgskill"><img src={LogoReact} alt="React Logo" width="100%"></img></div>
                                <p>React</p>
                            </div>
                            <div className="skill">
                                <div className="imgskill"><img src={HtmlCssJs} alt="HTML, CSS y JS Logo" width="100%"></img></div>
                                <p>HTML, CSS y Javascript</p>
                            </div>
                            <div className="skill">
                                <div className="imgskill"><img src={Adobe} alt="Adobe Logo" width="100%"></img></div>
                                <p>Illustrator, Photoshop y Premiere</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Skills;