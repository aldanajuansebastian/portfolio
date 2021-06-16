import React from 'react';
import './Inicio.css';
import fondo from './video/fondo.mp4';
import imagen from './img/ilustracion.png';
import {motion} from 'framer-motion';


function Inicio () {
    return (
        <div className="inicio">

            <video autoPlay loop muted className="videobg">
                <source src={fondo} type="video/mp4"></source>
            </video>

            <div className="imghome">
                <motion.img whileHover={{scale:1.1}} src={imagen} width="100%"></motion.img>
            </div>

            <motion.h1 whileHover={{scale:1.1}}>Sebastian Aldana</motion.h1>
            <motion.p whileHover={{scale:1.05}}>Modern Languages Professional</motion.p>
            <motion.p whileHover={{scale:1.05}}>Web Developer (Frontend)</motion.p>
            <motion.p whileHover={{scale:1.05}}>Digital Marketing</motion.p>

            
            
        </div>
    )
}

export default Inicio;